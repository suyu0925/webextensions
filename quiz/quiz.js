$modes = $('.exam_core_papers-question_mode')
// console.log('modes', $modes)

if ($modes.length > 0) {
  const questions = []

  // document.body.style.border = "5px solid red"
  for (let _m = 0; _m < $modes.length; _m++) {
    const $mode = $($modes[_m])
    // console.log('mode', $mode)

    const question = {
      source: 'tca',
      type: '',
      stem: '',
      id: null,
      options: []
    }

    const $border = $mode.find('.exam_core_papers-question_border')
    question.id = $border.attr('questionid')

    let $stem = $mode.find('.exam_core_questions_singleAnswer-text_border_stem')
    if ($stem.length > 0) {
      question.type = 'single'
      // console.log('单选题')

      question.stem = $stem.text()
      // console.log($stem.text())

      const $synopsis = $mode.find('.exam_core_questions_singleAnswer-text_border_synopsis')
      // console.log($synopsis)
      for (let i = 0; i < $synopsis.length; i++) {
        // console.log($($synopsis[i]).text())
        question.options.push($($synopsis[i]).text())
      }
    } else {
      $stem = $mode.find('.exam_core_questions_multipleChoice-text_border_stem')

      question.type = 'multiple'
      // console.log('多选题')

      question.stem = $stem.text()
      // console.log($stem.text())

      const $synopsis = $mode.find('.exam_core_questions_multipleChoice-text_border_synopsis')
      // console.log($synopsis)
      for (let i = 0; i < $synopsis.length; i++) {
        // console.log($($synopsis[i]).text())
        question.options.push($($synopsis[i]).text())
      }
    }

    questions.push(question)
  }

  // upload questions
  console.log('questions length', questions.length)

  fetch('http://120.77.183.131:8083/', {
    method: 'POST',
    mode: 'cors',
    headers: {
      "Content-Type": "application/json",
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify(questions)
  })
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err))
}
