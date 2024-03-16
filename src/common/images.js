import unknown from "../assets/unknown.png"

function getImageDictionary(folder) {
  return folder.reduce((dict, image) => {
    const key = image.slice(Math.min(image.length, image.lastIndexOf('/') + 1), image.indexOf('.'))
    return {...dict, [key]: image};
  }, {});
}

const characterImageFolder = Object.values(import.meta.glob('@/assets/character/image/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
const characterImages = getImageDictionary(characterImageFolder);

const catoImageFolder_SSR = Object.values(import.meta.glob('@/assets/catoImages/image/SSR/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
const catoImages_SSR = getImageDictionary(catoImageFolder_SSR);

const catoImageFolder_SR = Object.values(import.meta.glob('@/assets/catoImages/image/SR/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
const catoImages_SR = getImageDictionary(catoImageFolder_SR);

const catoImageFolder_R = Object.values(import.meta.glob('@/assets/catoImages/image/R/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
const catoImages_R = getImageDictionary(catoImageFolder_R);

export default {
  characterImages,
  catoImages: {
    SSR: catoImages_SSR,
    SR: catoImages_SR,
    R: catoImages_R,
  },
  unknown,
}
