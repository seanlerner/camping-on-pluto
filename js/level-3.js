const level_3 = {

  objects: [

    {
      class:          `saturn`,
      background:     `purple`,
      color:          `white`,
      instructions:   `match <span>saturn</span>`,
      hint_text:      ``,
      to_replace:     /S+/g,
      replacement:    match => variable_length_content(match, `s`),
      next_action:    next_object
    },

    {
      class:          `ground-layer-4`,
      background:     `brown`,
      color:          `white`,
      instructions:   `match the <span>deepest ground layer</span>`,
      hint_text:      `intersperse the words with <code>9+</code> matchers`,
      to_replace:     /meow\d+meow\d+beans/g,
      replacement:    match => match,
      next_action:    next_object
    },

    {
      class:          `ground-layer-1`,
      background:     `brown`,
      color:          `white`,
      instructions:   `match the <span>ground's top layer</span>`,
      hint_text:      ``,
      to_replace:     /0+live1+long2+and3+prosper4+/g,
      replacement:    match => match,
      next_action:    next_object
    },

    {
      class:          `monster`,
      background:     `rebeccapurple`,
      color:          `white`,
      instructions:   `match the <span>space monster</span>`,
      hint_text:      `<code>\\d</code> matches any single digit`,
      to_replace:     /N/g,
      replacement:    digit,
      next_action:    next_object
    },

    {
      class:          `black-hole`,
      background:     `midnightblue`,
      color:          `white`,
      instructions:   `match the <span>black hole</span>`,
      hint_text:      `<code>[A-Z]</code> matches an uppercase letter & <code>\\d</code> matches a digit<br>try combining with <code>+</code>`,
      to_replace:     /[A-Z]+\d+/g,
      replacement:    self,
      next_action:    next_object
    },

    {
      class:          `ground-layer-2-3`,
      background:     `brown`,
      color:          `white`,
      instructions:   `match the <span>middle ground layers</span>`,
      hint_text:      ``,
      to_replace:     /[ab]+[\d]+[yz]+/g,
      replacement:    self,
      next_action:    next_object
    },

    {
      class:          `body`,
      background:     `blue`,
      color:          `white`,
      instructions:   `match the <span>father and son's bodies</span>`,
      hint_text:      `<code>\\|</code> matches a '|' character`,
      to_replace:     /\|/g,
      replacement:    () => `|`,
      next_action:    next_object
    },

    {
      class:          `limb`,
      background:     `blue`,
      color:          `white`,
      instructions:   `match the <span>father and son's arms and legs</span>`,
      hint_text:      ``,
      to_replace:     /E/g,
      replacement:    () => `-`,
      next_action:    next_object
    },

    {
      class:          `head`,
      background:     `blue`,
      color:          `white`,
      instructions:   `match the <span>father and son's heads</span>`,
      hint_text:      ``,
      to_replace:     /[xV]/g,
      replacement:    self,
      next_action:    next_object
    },

    {
      class:          `rocks`,
      background:     `darkgrey`,
      color:          `black`,
      instructions:   `match the <span>campfire rocks</span>`,
      hint_text:      ``,
      to_replace:     /OoOOOOoooo/,
      replacement:    self,
      next_action:    next_object
    },

    {
      class:          `flame`,
      background:     `firebrickred`,
      color:          `black`,
      instructions:   `match the <span>campfire's flames</span>`,
      hint_text:      `they are all special characters and require a <code>\\</code> in front of each of them`,
      to_replace:     /D/g,
      replacement:    special_character,
      next_action:    game_over
    }

  ],

  picture: `
B                                                                              B



                  SSSSS
                SSSSSSSSS                                  YX45
                  SSSSS                                   YK678
                                                          ZZ9012
                                                          QA3456
                                                           CT7





        N N                                     V
         N N                    x      D  D    E|
        N                       |E   D   D D    |
       N                        |E OoOOOOoooo EE|
     0000000000000000000live1111111long2222222and33333prosper44444444444444
    ababbababababbabababb98948293482398428888239002348239482383zzzyzyzyyyzzz
   aababbababababbabababb98948293482398428888239002348239482383zzzyzyzyyyzzzz
  meow99999999999999999999999999999999meow9999999999999999999999999999999beans

B                                                                              B
`

}
