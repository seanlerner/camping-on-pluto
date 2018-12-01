// addEventListener(`game_ready`, run_tests)

let number_of_asserts = 0,
    success           = 0,
    fail              = 0,
    fail_fast         = false

const test = () => {

  // Level 1
  assert(() => !picture.innerText.includes(`T`))
  element_match_test(`t`, `star`)
  element_match_test(`j`, `top-left-ray`)
  element_match_test(`p`, `top-right-ray`)

  input_event(`t`)
  press_enter()
  assert_elements_contain(`star`,        `incorrect`)
  assert_elements_contain(`bottom-rays`, `incorrect`)

  input_event(`j`)
  press_enter()
  assert(() => match_text.innerText == `some incorrect lines match, and no correct lines match`)

  input_event(`q`)
  press_enter()
  assert(() => match_text.innerText == `only some correct lines match`)

  input_event(`qq`)
  press_enter()
  assert(() => match_text.innerText == `nothing matches`)

  input_event(`[ft]`)
  press_enter()
  assert(() => match_text.innerText == `some correct lines match, but so do some incorrect lines`)

  // Level 2
  element_match_test(`[qf]`,    `bottom-rays`)
  element_match_test(`[ae]`,    `left-and-right-rays`)
  element_match_test(`m[wsk]m`, `sun-core`)
  element_match_test(`m[chg]m`, `mars`)
  element_match_test(`j[gh]k`,  `arms`)
  element_match_test(`[jzak]`,  `legs`)
  element_match_test(`f`,       `heads`)
  element_match_test(`[u-y]`,   `body`)
  element_match_test(`[o-t]`,   `star`)
  element_match_test(`mm`,      `tent-layer-1`)
  element_match_test(`n+`,      `tent-layer-2-3`)
  element_match_test(`d+`,      `tent-layer-4-5-6`)
  element_match_test(`c+`,      `tent-layer-7`)
  element_match_test(`9+2+`,    `ground-layer-1`)
  element_match_test(`7+2+`,    `ground-layer-2-3`)
  element_match_test(`1+8+2+`,  `ground-layer-4`)

  // Level 3
  element_match_test(`s+`,                                  `saturn`)
  element_match_test(`meow9+meow9+beans`,                   `ground-layer-4`)
  element_match_test(`0+live1+long2+and3+prosper4+`,        `ground-layer-1`)
  element_match_test(`\\d`,                                 `monster`)
  element_match_test(`[A-Z]+\\d+`,                          `black-hole`)
  element_match_test(`[ab]+[\\d]+[yz]+`,                    `ground-layer-2-3`)
  element_match_test(`\\|`,                                 `body`)
  element_match_test(`-`,                                   `limb`)
  element_match_test(`[xV]`,                                `head`)
  element_match_test(`[oO]+`,                               `rocks`)
  element_match_test(`[\\^\\[\\]\\{\\}\\$\\.\\?\\+\\(\\)]`, `flame`)

  assert(() => picture.innerText.trim() == `You Win`)

  summary()
}

const abort_tests = () => fail > 0 && fail_fast

const assert = (condition, failure_message) => {
  if (abort_tests())
    return

  if (condition()) {
    success++
  } else {
    fail++
    console.assert(false, `${failure_message || condition}`)
  }

  number_of_asserts++
}

const element_match_test = (input, klass) => {
  if (abort_tests())
    return

  input_event(input)
  assert_elements_contain(klass, `match`)
  press_enter()
}

const input_event = str => {
  input.value = str
  input.dispatchEvent(new Event(`input`))
}

const press_enter = () => input.dispatchEvent(new KeyboardEvent(`keyup`, { keyCode: 13 }))

const assert_elements_contain = (elements_to_match_class, elements_contains_class) => {
  const elements = Array.from(document.querySelectorAll(`.to-match.${elements_to_match_class}`)),
        condition = () => elements.every(element => element.classList.contains(elements_contains_class))

  assert(() => elements.length > 0, `zero .${elements_to_match_class} elements contained class .match`)
  assert(condition, `all '.${elements_to_match_class}' elements did not contain class .${elements_contains_class}`)
}

const summary = () => {
  console.log(`${number_of_asserts} asserts`)
  console.log(`${success} success`)

  if (fail > 0)
    console.error(`${fail} fail`)
}

function run_tests() {
  input.value = `test`
  press_enter()
}
