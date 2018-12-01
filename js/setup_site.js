let levels

addEventListener(`DOMContentLoaded`, () => {
  input.addEventListener(`input`, key_press)
  input.addEventListener(`keyup`, check_if_enter_pressed)
  levels = [level_1, level_2, level_3]
  next_level()
  input.focus()
  dispatchEvent(new Event(`game_ready`))
})
