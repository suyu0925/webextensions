$modes = $('.exam_core_papers-question_mode')
// console.log('modes', $modes)

if ($modes.length > 0) {
  // document.body.style.border = "5px solid red"
  for (let _m = 0; _m < $modes.length; _m++) {
    const $mode = $($modes[_m])
    // console.log('mode', $mode)

    let $stem = $mode.find('.exam_core_questions_singleAnswer-text_border_stem')
    if ($stem.length > 0) {
      console.log('单选题')
      console.log($stem.text())

      const $synopsis = $mode.find('.exam_core_questions_singleAnswer-text_border_synopsis')
      // console.log($synopsis)
      for (let i = 0; i < $synopsis.length; i++) {
        console.log($($synopsis[i]).text())
      }
    } else {
      $stem = $mode.find('.exam_core_questions_multipleChoice-text_border_stem')

      console.log('多选题')
      console.log($stem.text())

      const $synopsis = $mode.find('.exam_core_questions_multipleChoice-text_border_synopsis')
      // console.log($synopsis)
      for (let i = 0; i < $synopsis.length; i++) {
        console.log($($synopsis[i]).text())
      }
    }
  }
}
