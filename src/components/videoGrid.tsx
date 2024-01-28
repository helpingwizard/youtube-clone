import { VideoCard } from "./videocard";

export const VIDEOS = [{
  title : "Besharam | Stand-Up Comedy by Abhishek Upmanyu",
  image : "abhi.png",
  thumbimage :"thumbabhi.png",
  author : "Abhishek Upmanyu",
  views  : "5M",
  timestamp : "3 days ago"
},
{
  title : "Selena Gomez-Love to Lose You",
  image : "photo1.png",
  thumbimage :"thumb.png",
  author : "Selena Gomez",
  views  : "45M",
  timestamp : "18 days ago"
},
{
  title : "Master your Mindset, Overcome Self-Deception, Change your Life | Shadé Zahrai | TEDxDRC",
  image : "shade.png",
  thumbimage :"thumbShade.png",
  author : "TED X",
  views  : "10M",
  timestamp : "9 days ago"
},
{
  title : "Master your Mindset, Overcome Self-Deception, Change your Life | Shadé Zahrai | TEDxDRC",
  image : "shade.png",
  thumbimage :"thumbShade.png",
  author : "TED X",
  views  : "10M",
  timestamp : "9 days ago"
},
{
  title : "Master your Mindset, Overcome Self-Deception, Change your Life | Shadé Zahrai | TEDxDRC",
  image : "shade.png",
  thumbimage :"thumbShade.png",
  author : "TED X",
  views  : "10M",
  timestamp : "9 days ago"
},
{
  title : "Master your Mindset, Overcome Self-Deception, Change your Life | Shadé Zahrai | TEDxDRC",
  image : "shade.png",
  thumbimage :"thumbShade.png",
  author : "TED X",
  views  : "10M",
  timestamp : "9 days ago"
},
{
  title : "Selena Gomez-Love to Lose You",
  image : "photo1.png",
  thumbimage :"thumb.png",
  author : "Selena Gomez",
  views  : "45M",
  timestamp : "18 days ago"
},
{
  title : "Selena Gomez-Love to Lose You",
  image : "photo1.png",
  thumbimage :"thumb.png",
  author : "Selena Gomez",
  views  : "45M",
  timestamp : "18 days ago"
},
{
  title : "Besharam | Stand-Up Comedy by Abhishek Upmanyu",
  image : "abhi.png",
  thumbimage :"thumbabhi.png",
  author : "Abhishek Upmanyu",
  views  : "5M",
  timestamp : "3 days ago"
},
{
  title : "Selena Gomez-Love to Lose You",
  image : "photo1.png",
  thumbimage :"thumb.png",
  author : "Selena Gomez",
  views  : "45M",
  timestamp : "18 days ago"
},
{
  title : "Master your Mindset, Overcome Self-Deception, Change your Life | Shadé Zahrai | TEDxDRC",
  image : "shade.png",
  thumbimage :"thumbShade.png",
  author : "TED X",
  views  : "10M",
  timestamp : "9 days ago"
},
{
  title : "Master your Mindset, Overcome Self-Deception, Change your Life | Shadé Zahrai | TEDxDRC",
  image : "shade.png",
  thumbimage :"thumbShade.png",
  author : "TED X",
  views  : "10M",
  timestamp : "9 days ago"
},
{
  title : "Master your Mindset, Overcome Self-Deception, Change your Life | Shadé Zahrai | TEDxDRC",
  image : "shade.png",
  thumbimage :"thumbShade.png",
  author : "TED X",
  views  : "10M",
  timestamp : "9 days ago"
},
{
  title : "Master your Mindset, Overcome Self-Deception, Change your Life | Shadé Zahrai | TEDxDRC",
  image : "shade.png",
  thumbimage :"thumbShade.png",
  author : "TED X",
  views  : "10M",
  timestamp : "9 days ago"
},
{
  title : "Selena Gomez-Love to Lose You",
  image : "photo1.png",
  thumbimage :"thumb.png",
  author : "Selena Gomez",
  views  : "45M",
  timestamp : "18 days ago"
},
{
  title : "Selena Gomez-Love to Lose You",
  image : "photo1.png",
  thumbimage :"thumb.png",
  author : "Selena Gomez",
  views  : "45M",
  timestamp : "18 days ago"
}
]


export default function VideoGrid() {
  return (
    <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ml-5 mr-3">
      {VIDEOS.map((video) => (
        <div key={video.title}>
          <VideoCard
            title={video.title}
            image={video.image}
            thumbimage={video.thumbimage}
            author={video.author}
            views={video.views}
            timestamp={video.timestamp}
          />
        </div>
      ))}
    </div>
  );
}
