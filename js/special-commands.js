const goto_object = () => {
  const klass = input.value.slice(5),
        game_is_over = () => picture.innerText.includes(`You Win`)

  while (!game_is_over() && klass != current_object.class) {
    console.log(`Skipping ${current_object.class}`)
    mark_element_matched_and_next_action()
  }

  if (game_is_over())
    console.log(`Could not find '${klass}'`)

}

