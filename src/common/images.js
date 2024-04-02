import unknown from "../assets/unknown.png"

function getImageDictionary(folder) {
  return folder.reduce((dict, image) => {
    const key = image.slice(Math.min(image.length, image.lastIndexOf('/') + 1), image.lastIndexOf('.')).split('-')[0]
    return {...dict, [key]: image};
  }, {});
}

const characterImageFolder = Object.values(import.meta.glob('@/assets/character/image/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
const characterImages = getImageDictionary(characterImageFolder);

const catoImageFolder_SSR = Object.values(import.meta.glob('@/assets/cato/image/SSR/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
const catoImages_SSR = getImageDictionary(catoImageFolder_SSR);

const catoImageFolder_SR = Object.values(import.meta.glob('@/assets/cato/image/SR/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
const catoImages_SR = getImageDictionary(catoImageFolder_SR);

const catoImageFolder_R = Object.values(import.meta.glob('@/assets/cato/image/R/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
const catoImages_R = getImageDictionary(catoImageFolder_R);

const enemyImageFolder = Object.values(import.meta.glob('@/assets/enemy/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
const enemyImages = getImageDictionary(enemyImageFolder);

const versionBannerFolder = Object.values(import.meta.glob('@/assets/versionbanner/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
const versionBanners = getImageDictionary(versionBannerFolder);


export default {
  characterImages,
  catoImages: {
    SSR: catoImages_SSR,
    SR: catoImages_SR,
    R: catoImages_R,
  },
  enemyImages,
  versionBanners,
  unknown,
}
