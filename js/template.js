const template = {

  objects: [    {
    class:          `object`,
    color:          `cyan`,
    instructions:   `match the <span>object</span>`,
    hint_text:      `<code>this is a code</code><br>line 2`,
    to_replace:     `YYY`,
    replacement_fn: () => `abc`
  }],

  picture: `
Z23456789A123456789A123456789A123456789C123456789D123456789E123456789F123456789G
2                                                                              2
3                                                                              3
4                                                                              4
5                                                                              5
6                                                                              6
7                                                                              7
8                                                                              8
9                                                                              9
A                                                                              A
1                                                                              1
2                             YYY YYY                                          2
3                                                                              3
4                                                                              4
5                                 YYY YYY                                      5
6                                                                              6
7                                                                              7
8                                                                              8
9                                                                              9
C                                                                              C
1                                                                              1
2                                                                              2
3                                                                              3
4                                                                              4
V23456789A123456789A123456789A123456789A123456789A123456789A123456789A123456789W
`
}
