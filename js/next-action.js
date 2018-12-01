let current_level, current_object

const blank                   = ` `,
      lowers                  = `abcdefghijkmnopqrstuvwxyz`,
      limited_lowers          = `abcdefhijkmnopqrstvwxyz`,
      special_characters      = `^[]{}$.?+()`,
      random                  = max_number   => Math.floor(Math.random() * max_number),
      digit                   = ()           => random(9).toString(),
      lower                   = ()           => lowers[random(lowers.length)],
      special_character       = ()           => special_characters[random(special_characters.length)],
      limited_lower           = ()           => limited_lowers[random(limited_lowers.length)],
      variable_length_content = (match, str) => Array(match.length + 1).join(str),
      remove_blanks           = picture      => picture.replace(/B/g, blank),
      to_lower_case           = match        => match.toLowerCase(),
      self                    = match        => match


const next_level = () => {
  current_level         = levels.shift()
  current_level.picture = remove_blanks(current_level.picture)
  current_level.objects.forEach(init_object)
  picture.innerHTML = current_level.picture
  next_object()
}

const init_object = object => {
  const replacement = match => object.replacement(match),
        span        = match => `<span class='to-match ${object.class}'>${replacement(match)}</span>`,
        to_replace  = object.to_replace

  current_level.picture = current_level.picture.replace(to_replace, span)
}

const next_object = () => {
  current_object           = current_level.objects.shift()
  const current_to_matches = class_array(current_object.class)
  instructions.innerHTML   = current_object.instructions
  input.value              = ``
  hint_text.innerHTML      = current_object.hint_text || ``
  match_text.innerText     = ``
  reset_elements()
  current_to_matches.forEach(element => element.classList.add(`current-goal`))
}

const game_over = () => {
  picture.innerHTML = remove_blanks(win.picture)
  control_panel.remove()
}
