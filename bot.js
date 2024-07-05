window.alert = () => {
  console.warn('LOL')
}

const sleep = (delayMs) => new Promise((resolve) => setTimeout(resolve, delayMs))

const $getCheck = i =>
  document.getElementById(`checkbox-${i}`)

async function possiblyClick (i, $check) {
  const actual = $check.checked
  const degree = i
  const modulus = 2 + Math.round(3 * (1 + Math.sin(degree * Math.PI / 180)))
  const desired = i % modulus === 0
  if (actual !== desired) {
    $check.click()
    await sleep(251)
  } else {
    await sleep(1)
  }
}

async function patternAreaWindow () {
  let i = 1
  let direction = 1
  let badCount = 0
  while (true) {
    console.warn({ i, direction, badCount })
    const $check = $getCheck(i)
    const inWindow = !!$check
    if (inWindow) {
      await possiblyClick(i, $check)
      badCount = 0
    } else {
      ++badCount
      if (badCount > 10) {
        direction = -direction
        badCount = 0
      }
      await sleep(1)
    }
    i += direction
  }
}

await patternAreaWindow()
