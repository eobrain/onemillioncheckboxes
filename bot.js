window.alert = () => {
  console.warn('LOL')
}

const sleep = (delayMs) => new Promise((resolve) => setTimeout(resolve, delayMs))

const $countH2 = document.querySelector('h1 + h2')

const getCount = () => Number($countH2.innerText.split(' ')[0].replace(/,/, ''))

const $getCheck = i =>
  document.getElementById(`checkbox-${i}`)

async function patternAreaWindow () {
  let i = 1
  let $check
  while (!($check = $getCheck(i))) {
    await sleep(1)
    ++i
  }
  const startI = i
  while (true) {
    let count = 0

    i = startI
    console.warn('starting at ', i)
    while ($check = $getCheck(i)) {
      const actual = $check.checked
      const degree = i / 10
      const modulus = 2 + Math.round(3 * (1 + Math.sin(degree * Math.PI / 180)))
      const desired = i % modulus == 0
      // console.warn(i-A,{desired,actual})
      if (actual !== desired) {
        $check.click()
        ++count
        await sleep(251)
      }
      ++i
    }
    console.warn('finished at ', i, 'count=', count)
    await sleep(100)
  }
}

await patternAreaWindow()
