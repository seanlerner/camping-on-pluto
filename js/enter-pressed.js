const check_if_enter_pressed = event => {
  if (event.keyCode == `13`) {
    if (input.value == `test`)
      test()
    else if (input.value.slice(0, 4) == `goto`)
      goto_object()
    else
      check_if_object_match()
  }
}
