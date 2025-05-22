import { NextResponse } from 'next/server';

export async function GET() {
  // Move API key to environment variables for security
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
  const CHANNEL_ID = 'UC9ARnNhPen6bRFYBoYZ56DQ'; // This should be the actual channel ID, not username
  
  if (!YOUTUBE_API_KEY) {
    return NextResponse.json(
      { error: 'YouTube API key not configured' },
      { status: 500 }
    );
  }

  try {
    // Use channel ID directly instead of forUsername (which is deprecated)
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${YOUTUBE_API_KEY}`
    );
    
    if (!channelResponse.ok) {
      const errorText = await channelResponse.text();
      console.error('Channel API response error:', errorText);
      throw new Error(`Failed to fetch channel data: ${channelResponse.status}`);
    }
    
    const channelData = await channelResponse.json();
    
    // Check for API errors
    if (channelData.error) {
      console.error('YouTube API Error:', channelData.error);
      throw new Error(`YouTube API Error: ${channelData.error.message}`);
    }
    
    // Check if channel was found
    if (!channelData.items || channelData.items.length === 0) {
      console.error('Channel not found or no items returned:', channelData);
      throw new Error('Channel not found. Please verify the channel ID.');
    }
    
    const uploadsPlaylistId = channelData.items[0]?.contentDetails?.relatedPlaylists?.uploads;

    if (!uploadsPlaylistId) {
      console.error('Uploads playlist ID not found in channel data:', channelData.items[0]);
      throw new Error('Could not determine the uploads playlist ID.');
    }

    // Get the videos from the uploads playlist
    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=6&playlistId=${uploadsPlaylistId}&key=${YOUTUBE_API_KEY}&order=date`
    );
    
    if (!videosResponse.ok) {
      const errorText = await videosResponse.text();
      console.error('Videos API response error:', errorText);
      throw new Error(`Failed to fetch videos: ${videosResponse.status}`);
    }
    
    const videosData = await videosResponse.json();
    
    // Check for API errors
    if (videosData.error) {
      console.error('YouTube API Error:', videosData.error);
      throw new Error(`YouTube API Error: ${videosData.error.message}`);
    }
    
    if (!videosData.items || videosData.items.length === 0) {
      console.log('No videos found in the playlist');
      return NextResponse.json({ videos: [] });
    }

    const videos = videosData.items
      .map((item: any) => {
        const videoId = item.snippet?.resourceId?.videoId;
        if (!videoId) return null;
        
        return {
          id: videoId,
          title: item.snippet?.title || 'Untitled',
          description: item.snippet?.description || '',
          thumbnail: item.snippet?.thumbnails?.high?.url || 
                    item.snippet?.thumbnails?.medium?.url || 
                    item.snippet?.thumbnails?.default?.url,
          publishedAt: item.snippet?.publishedAt,
          url: `https://www.youtube.com/watch?v=${videoId}`
        };
      })
      .filter((video: any) => video !== null); // Filter out null entries

    return NextResponse.json({ videos });
    
  } catch (error) {
    console.error('YouTube API Error:', error);
    
    // Return more specific error messages in development
    const isDevelopment = process.env.NODE_ENV === 'development';
    const errorMessage = isDevelopment && error instanceof Error 
      ? error.message 
      : 'Failed to fetch YouTube videos';
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}