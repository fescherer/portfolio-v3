import { YoutubeIcon } from "@/icons/social/youtube.icon";
import { CardWrapper } from "./card-wrapper.component";

const cards = [
  {
    icon: <YoutubeIcon className="size-6" color="#FFFFFF" />,
    title: 'Video Editing',
    text: 'orem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolorum quod vel obcaecati fuga neque '
  },
  {
    icon: <YoutubeIcon className="size-6" color="#FFFFFF" />,
    title: 'Code React',
    text: 'orem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolorum quod vel obcaecati fuga neque '
  }
]

export function ServicesComponent() {
  return (
    <CardWrapper direction="collumn" id="services">
      <h2 className="text-center text-4xl leading-loose tracking-wider">
        Services
      </h2>

      <div className="grid grid-cols-2 gap-10">
        {
          cards.map(card => (
            <div key={card.title} className="rounded border border-teal-400 p-4">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-primary p-3">
                  {card.icon}
                </div>
                <h3 className="text-xl font-medium">
                  {card.title}
                </h3>
              </div>
              <p>
                {card.text}
              </p>
            </div>
          ))
        }
      </div>
    </CardWrapper>
  )
}
// "text-center text-4xl leading-loose tracking-wider"
