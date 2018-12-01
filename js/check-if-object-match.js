const all_to_match                = ()      => class_array(`to-match`),
      current_to_match            = ()      => class_array(current_object.class),
      current_goal                = ()      => class_array(`current-goal`),
      current_match               = ()      => class_array(`match`),
      match_and_goal_equal_length = ()      => current_match().length == current_goal().length,
      all_correct                 = ()      => current_match().every((element, index) => element == current_goal()[index]),
      correct_objects_match       = ()      => match_and_goal_equal_length() && all_correct(),
      nothing_matches             = ()      => current_match().length == 0,
      some_correct_objects_match  = ()      => class_array(`match`).find(element => element.classList.contains(`current-goal`)),
      incorrect_objects_match     = ()      => class_array(`match`).find(element => !element.classList.contains(`current-goal`)),
      reset_elements              = ()      => all_to_match().forEach(reset_element),
      reset_element               = element => element.classList.remove(`correct`, `incorrect`, `match`),
      matches                     = element => RegExp(`^${input.value}$`).test(element.innerText),
      proper_match                = element => element.classList.contains(current_object.class) && element.classList.contains(`match`),
      mark_correct_or_incorrect   = element => element.classList.add(correct_or_incorrect(element)),
      correct_or_incorrect        = element => proper_match(element) ? `correct` : `incorrect`

const check_if_object_match = () => {
  current_goal().forEach(mark_correct_or_incorrect)
  current_match().forEach(mark_correct_or_incorrect)

  if (correct_objects_match())
    mark_element_matched_and_next_action()
  else if (nothing_matches())
    match_text.innerText = `nothing matches`
  else if (some_correct_objects_match() && incorrect_objects_match())
    match_text.innerText = `some correct lines match, but so do some incorrect lines`
  else if (some_correct_objects_match())
    match_text.innerText = `only some correct lines match`
  else
    match_text.innerText = `some incorrect lines match, and no correct lines match`

}

const mark_element_matched_and_next_action = () => {
  current_to_match().forEach(mark_element_matched)
  if (current_object.next_action)
    current_object.next_action()
}

const some_incorrect_objects_match = () => {
  current_match().find(element => !element.classList.contains(`current-goal`))
}

const mark_element_matched = element => {
  element.classList.remove(`current-goal`)
  element.classList.add(`matched`)
  element.style.background = current_object.background
  element.style.color      = current_object.color
}

const key_press = () => {
  reset_elements()
  match_text.innerText = ``

  input_container.classList.remove(`error`)

  try {
    all_to_match().forEach(highlight_if_match)
  } catch(error) {
    input_container.classList.add(`error`)
  }

}

const highlight_if_match = element => {
  if (matches(element))
    element.classList.add(`match`)
}
