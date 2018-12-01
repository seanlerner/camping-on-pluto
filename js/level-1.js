const level_1 = {

  objects: [

    {
      class:          `star`,
      background:     `dodgerblue`,
      color:          `white`,
      instructions:   `match the <span>stars</span>`,
      hint_text:      `type '<code>t</code>' to match the letter 't'<br>press <i>&lt;enter&gt;</i> after you've made your match`,
      to_replace:     /T/g,
      replacement:    () => `t`,
      next_action:    next_object
    },

    {
      class:          `top-left-ray`,
      background:     `orange`,
      instructions:   `match the <span>sun's top left ray</span>`,
      hint_text:      `type '<code>j</code>' to match the letter j`,
      to_replace:     /J/g,
      replacement:    to_lower_case,
      next_action:    next_object
    },

    {
      class:          `top-right-ray`,
      background:     `orange`,
      instructions:   `match the <span>sun's top right ray</span>`,
      hint_text:      ``,
      to_replace:     /P/g,
      replacement:    to_lower_case,
      next_action:    next_object
    },

    {
      class:          `bottom-rays`,
      background:     `orange`,
      instructions:   `match the <span>sun's bottom rays</span>`,
      hint_text:      `type '<code>[qf]</code>' to match the letters 'q' and 'f'`,
      to_replace:     /[QF]/g,
      replacement:    to_lower_case,
      next_action:    next_object
    },

    {
      class:          `left-and-right-rays`,
      background:     `orange`,
      instructions:   `match the <span>sun's left and right rays</span>`,
      hint_text:      ``,
      to_replace:     /[AE]/g,
      replacement:    to_lower_case,
      next_action:    next_object
    },

    {
      class:          `sun-core`,
      background:     `tomato`,
      instructions:   `match the <span>sun's core</span>`,
      hint_text:      `'<code>m[wsk]m</code>' matches the letters m + w, s, or k + m`,
      to_replace:     /M[WSK]M/g,
      replacement:    to_lower_case,
      next_action:    next_object
    },

    {
      class:          `mars`,
      background:     `maroon`,
      instructions:   `match <span>mars</span>`,
      hint_text:      ``,
      to_replace:     /M[CGH]M/g,
      replacement:    to_lower_case,
      next_action:    next_level
    }

  ],

  picture: `
B                                                                              B
                                               T                               B
                            T                                                  B
                                                                               B
                                                                               B
                         J       P                                             B
     T                    J     P                             T                B
                           J   P                                               B
                            MWM                                                B
                     A A A  MSM  E E E                                         B
                            MKM                                                B
 T                         Q   F                                             T B
                          Q     F                                              B
                         Q       F                                             B
                                                                               B
                                                T                              B
                                                                               B
       T                                                                       B
                                                              MCM              B
                   T                                          MHM              B
                                                              MGM              B
                                           T                                   B
       T                                                                       B
                                                                               B
B                                                                              B
`

}
