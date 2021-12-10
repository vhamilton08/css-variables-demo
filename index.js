let inputs = document.querySelectorAll('.controls input')
// console.log(inputs)
const handleUpdate = (e) => {
console.log(e.target.value)
const suffix = e.target.dataset.sizing || ''
document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value + suffix);

}

inputs.forEach(input => input.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))
