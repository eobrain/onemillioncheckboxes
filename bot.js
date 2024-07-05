window.alert = () => {
  console.warn('LOL')
}

const sleep = (delayMs) => new Promise((resolve) => setTimeout(resolve, delayMs))

const f = i => {
  const degree = i / 10
  const modulus = 2 + Math.round(3 * (1 + Math.sin(degree * Math.PI / 180)))
  return i % modulus === 0
}

async function possiblyClick (i, $check) {
  const desired = f(i)
  const actual = $check.checked
  if (actual !== desired) {
    $check.click()
    await sleep(251)
  } else {
    await sleep(1)
  }
}

async function patternInFoundElems () {
  while (true) {
    const startMs = Date.now()
    for (const $check of document.getElementsByClassName('kjKrcT')) {
      const i = Number($check.id.replace(/^checkbox-/, ''))
      await possiblyClick(i, $check)
    }
    await sleep(1)
    console.warn((Date.now() - startMs) / 1000, 'seconds')
  }
}

await patternInFoundElems()
