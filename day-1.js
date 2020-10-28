const arr = [5, 3, 1, 8, 10, 2, 5, 2, 1, 7]
// const arr = [2, 1, 3]
function swap (arr, i, j) {
  const tmp = arr[j]
  arr[j] = arr[i]
  arr[i] = tmp
}

function bubbleSort (arr) {
  if (arr == null || arr.length < 2) {
    return
  }
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }
}

function selectSort (arr) {
  if (arr == null || arr.length < 2) {
    return
  }
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j
      }
    }
    swap(arr, i, minIdx)
  }
}

function insertSort (arr) {
  if (arr == null || arr.length < 2) {
    return
  }
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1)
      } else {
        break
      }
    }
  }
}

function mergeSort (arr) {
  if (arr == null || arr.length < 2) {
    return
  }
  const L = 0, R = arr.length - 1
  sortProcess(arr, L, R)
  function sortProcess (arr, L, R) {
    if (L === R) { // 数组只有一个元素，天然有序
      return
    }
    const M = L + ((R - L) >> 1)
    sortProcess(arr, L, M)
    sortProcess(arr, M + 1, R)
    merge(arr, L, M, R)
  }

  function merge (arr, L, M, R) {
    const tmp = []
    let p1 = L, p2 = M + 1, i = 0
    while (p1 <= M && p2 <= R) {
      if (arr[p1] <= arr[p2]) {
        tmp[i++] = arr[p1++]
      } else {
        tmp[i++] = arr[p2++]
      }
    }
    while (p1 <= M) {
      tmp[i++] = arr[p1++]
    }
    while (p2 <= R) {
      tmp[i++] = arr[p2++]
    }
    for (i = 0; i < tmp.length; i++) {
      arr[L + i] = tmp[i]
    }
  }
}

function quickSort (arr) {
  const L = 0, R = arr.length - 1
  sortProcess(arr, L, R)

  function sortProcess (arr, L, R) {
    if (L >= R) {
      return
    }
    const [L1, R1] = partition(arr, L, R)
    sortProcess(arr, L, L1)
    sortProcess(arr, R1, R)
  }

  function partition (arr, L, R) {
    const randIdx = L + parseInt(Math.random() * (R - L + 1)) // 打乱样本状况
    swap(arr, R, randIdx)
    let less = L - 1, more = R
    while (L < more) {
      if (arr[L] < arr[R]) {
        swap(arr, L++, ++less)
      } else if (arr[L] > arr[R]) {
        swap(arr, L, --more)
      } else (
        L++
      )
    }
    swap(arr, more, R)
    return [less, more + 1]
  }
}

function smallSum (arr) {
  if (arr == null || arr.length < 2) {
    return
  }
  const L = 0, R = arr.length - 1
  return sortProcess(arr, L, R)
  function sortProcess (arr, L, R) {
    if (L === R) { // 数组只有一个元素，天然有序
      return 0
    }
    const M = L + ((R - L) >> 1)
    return sortProcess(arr, L, M) + sortProcess(arr, M + 1, R) + merge(arr, L, M, R)
  }

  function merge (arr, L, M, R) {
    const tmp = []
    let p1 = L, p2 = M + 1, i = 0, sum = 0
    while (p1 <= M && p2 <= R) {
      if (arr[p1] < arr[p2]) {
        sum += arr[p1] * (R - p2 + 1)
        tmp[i++] = arr[p1++]
      } else {
        tmp[i++] = arr[p2++]
      }
    }
    while (p1 <= M) {
      tmp[i++] = arr[p1++]
    }
    while (p2 <= R) {
      tmp[i++] = arr[p2++]
    }
    for (i = 0; i < tmp.length; i++) {
      arr[L + i] = tmp[i]
    }
    return sum
  }
}

function smallSumTester (arr) {
  let sum = 0
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i]) {
        sum += arr[j]
      }
    }
  }
  return sum
}

// bubbleSort(arr)
// selectSort(arr)
// insertSort(arr)
// mergeSort(arr)
// quickSort(arr)
const res1 = smallSumTester(arr)
const res = smallSum(arr)
console.log(res, res1)