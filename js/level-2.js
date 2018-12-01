const level_2 = {

  objects: [

    {
      class:          `arms`,
      background:     `burlywood`,
      instructions:   `match the <span>people's arms</span>`,
      hint_text:      ``,
      to_replace:     /J[GH]K/g,
      replacement:    to_lower_case,
      next_action:    next_object
    },

    {
      class:          `legs`,
      background:     `burlywood`,
      instructions:   `match the <span>people's legs</span>`,
      hint_text:      ``,
      to_replace:     /[AZKJ]/g,
      replacement:    to_lower_case,
      next_action:    next_object
    },

     {
      class:          `heads`,
      background:     `burlywood`,
      instructions:   `match the <span>people's heads</span>`,
      hint_text:      ``,
      to_replace:     /F/g,
      replacement:    to_lower_case,
      next_action:    next_object
    },

     {
      class:          `body`,
      background:     `burlywood`,
      instructions:   `match the <span>people's bodies</span>`,
      hint_text:      `'<code>[u-y]</code>' matches a letter from u to y`,
      to_replace:     /[U-Y]/g,
      replacement:    to_lower_case,
      next_action:    next_object
    },

     {
      class:          `star`,
      background:     `dodgerblue`,
      color:          `white`,
      instructions:   `match the <span>stars</span>`,
      hint_text:      ``,
      to_replace:     /[O-T]/g,
      replacement:    to_lower_case,
      next_action:    next_object
    },

    {
      class:          `tent-layer-1`,
      background:     `forestgreen`,
      color:          `white`,
      instructions:   `match the <span>tent's top layer</span>`,
      hint_text:      ``,
      to_replace:     /MM/,
      replacement:    to_lower_case,
      next_action:    next_object
    },

    {
      class:          `tent-layer-2-3`,
      background:     `forestgreen`,
      color:          `white`,
      instructions:   `match the <span>tent's next two layers</span>`,
      hint_text:      `'<code>[n+]</code>' matches the letter 'n' one or more times`,
      to_replace:     /N+/g,
      replacement:    to_lower_case,
      next_action:    next_object
    },

     {
      class:          `tent-layer-4-5-6`,
      background:     `forestgreen`,
      color:          `white`,
      instructions:   `match the <span>tent's next three layers</span>`,
      hint_text:      ``,
      to_replace:     /D+/g,
      replacement:    to_lower_case,
      next_action:    next_object
    },

    {
      class:          `tent-layer-7`,
      background:     `forestgreen`,
      color:          `white`,
      instructions:   `match the <span>tent's bottom layer</span>`,
      hint_text:      ``,
      to_replace:     /C+/g,
      replacement:    to_lower_case,
      next_action:    next_object
    },

    {
      class:          `ground-layer-1`,
      background:     `brown`,
      color:          `white`,
      instructions:   `match the <span>ground's top layer</span>`,
      hint_text:      `'<code>9+2+</code>' will match '9' one or more times followed by '2' one or more times`,
      to_replace:     /9+2+/g,
      replacement:    to_lower_case,
      next_action:    next_object
    },

    {
      class:          `ground-layer-2-3`,
      background:     `brown`,
      color:          `white`,
      instructions:   `match the <span>ground's next two layers</span>`,
      hint_text:      ``,
      to_replace:     /7+2+/g,
      replacement:    to_lower_case,
      next_action:    next_object
    },

    {
      class:          `ground-layer-4`,
      background:     `brown`,
      color:          `white`,
      instructions:   `match the <span>ground's bottom layer</span>`,
      hint_text:      ``,
      to_replace:     /1+8+2+/g,
      replacement:    to_lower_case,
      next_action:    next_level
    }

  ],

  picture: `
B                                                                              B

                                     R
       T
                                                                    R

                          O                             P


      S


                   MM                                                S
                  NNNN
                 NNNNNN               F
                DDDDDDDD             JGK          F
               DDDDDDDDDD             U          JHK
              DDDDDDDDDDDD            Y           V
             CCCCCCCCCCCCCC          J Z         A K
     9999999999999999999999999999999999922222222222222222222222222222222222
    777777777777777777777777777777777777222222222222222222222222222222222222
   77777777777777777777777777777777777772222222222222222222222222222222222222
  1111188888888888888888888888888888888888888888888888888888888888888888822222

B                                                                              B
`

}
