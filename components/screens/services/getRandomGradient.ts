const gradients = [
    ['#FF7E5F', '#FEB47B'], // Warm gradient (sunset tones)
    ['#6A11CB', '#2575FC'], // Purple to blue gradient
    ['#FF9A8B', '#FF6A88'], // Soft pink gradient
    ['#00F260', '#0575E6'], // Green to blue gradient
    ['#FAD0C4', '#F29C11'], // Peachy tones gradient
    ['#8E2DE2', '#4A00E0'], // Purple gradient
    ['#FF4E50', '#F9D423'], // Vibrant red to yellow
    ['#36D1DC', '#5B86E5'], // Blue to light purple gradient
  ];

export const getRandomGradient = () =>{
    const min = 0
    const max =gradients.length-1
    const randomNumber = Math.floor(Math.random() *(max-min) +min)
    return gradients[randomNumber] as [string, string]
}