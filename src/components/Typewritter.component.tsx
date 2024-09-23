'use client'

import TypewriterComponent from "typewriter-effect";

export function TypewritterComponent() {
    return (
        <TypewriterComponent
        options={{
          strings: [
            "Web Developer",
            "Designer",
            "Game Developer",
            "Content Creator"
            ],
          autoStart: true,
          loop: true,
        //   wrapperClassName: 'font-mono',
        }}
      />
    )
}