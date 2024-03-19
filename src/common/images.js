import unknown from "../assets/unknown.png"
import lazyUnknown from "../assets/lazyUnknown.png"

function getImageDictionary(folder) {
  return folder.reduce((dict, image) => {
    const key = image.slice(Math.min(image.length, image.lastIndexOf('/') + 1), image.indexOf('.'))
    return {...dict, [key]: image};
  }, {});
}

const characterImageFolder = Object.values(import.meta.glob('@/assets/character/image/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
const characterImages = getImageDictionary(characterImageFolder);

const characterImageFolder_lazy = Object.values(import.meta.glob('@/assets/character/lazy-image/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
const characterImages_lazy = getImageDictionary(characterImageFolder_lazy);

const catoImageFolder_SSR = Object.values(import.meta.glob('@/assets/cato/image/SSR/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
const catoImages_SSR = getImageDictionary(catoImageFolder_SSR);

const catoImageFolder_SR = Object.values(import.meta.glob('@/assets/cato/image/SR/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
const catoImages_SR = getImageDictionary(catoImageFolder_SR);

const catoImageFolder_R = Object.values(import.meta.glob('@/assets/cato/image/R/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
const catoImages_R = getImageDictionary(catoImageFolder_R);

const catoImageFolder_SSR_lazy = Object.values(import.meta.glob('@/assets/cato/lazy-image/SSR/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
const catoImages_SSR_lazy = getImageDictionary(catoImageFolder_SSR_lazy);

const catoImageFolder_SR_lazy = Object.values(import.meta.glob('@/assets/cato/lazy-image/SR/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
const catoImages_SR_lazy = getImageDictionary(catoImageFolder_SR_lazy);

const catoImageFolder_R_lazy = Object.values(import.meta.glob('@/assets/cato/lazy-image/R/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
const catoImages_R_lazy = getImageDictionary(catoImageFolder_R_lazy);

export default {
  characterImages: {
    normal: characterImages,
    lazy: characterImages_lazy,
  },
  catoImages: {
    normal: {
      SSR: catoImages_SSR,
      SR: catoImages_SR,
      R: catoImages_R,
    },

    lazy: {
      SSR: catoImages_SSR_lazy,
      SR: catoImages_SR_lazy,
      R: catoImages_R_lazy,
    }
  },
  unknown,
  lazyUnknown,
}
