import { isObjectLike } from 'lodash'
import { BrowserStorageItem } from 'core/variables/constants'

// /
//  * Helper for local storage
//  * @class
//  */
class StorageService {
  private storage: Storage

  // /
  //  *
  //  * @param {Storage} storage
  //  */
  constructor(storage: Storage) {
    this.storage = storage
  }

  // /
  //  * Get item from storage.
  //  * @param {BrowserStorageItem} itemName Item name in storage.
  //  * @return {string | null} Item value.
  //  */
  get(itemName: BrowserStorageItem) {
    let item
    try {
      item = this.storage.getItem(itemName)
    } catch (error) {
      console.error(`getItem from storage error: ${error}`)
    }
    const numPattern = new RegExp(/^\d+$/)
    const jsonPattern = new RegExp(/[[{].*[}\]]/)

    if (item) {
      if (jsonPattern.test(item)) {
        return JSON.parse(item)
      }
      if (numPattern.test(item)) {
        return parseFloat(item)
      }
      return item
    }
    return null
  }

  // /
  //  * Set item in storage.
  //  * @param {BrowserStorageItem} itemName Item name in storage.
  //  * @param {any} item Item value.
  //  * @return {void}
  //  */
  set(itemName: BrowserStorageItem, item: string) {
    try {
      if (isObjectLike(item)) {
        this.storage.setItem(itemName, JSON.stringify(item))
      } else {
        this.storage.setItem(itemName, item)
      }
    } catch (error) {
      console.error(`setItem to storage error: ${error}`)
    }
  }

  /**
   * Remove item from storage.
   * @param {BrowserStorageItem} itemName Item name in storage.
   * @return {void}
   */
  remove(itemName: BrowserStorageItem) {
    this.storage.removeItem(itemName)
  }
}
export const localStorageService = new StorageService(localStorage)
export const sessionStorageService = new StorageService(sessionStorage)

export default StorageService
