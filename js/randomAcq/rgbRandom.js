/*
 * @Description: rgb颜色随机获取
 * @Author: h.ss
 * @Date: 2023-03-20 10:27:48
 * @LastEditors: h.ss
 * @LastEditTime: 2023-03-20 10:33:36
 */

const RandomColorRgb = () => {
  let r, g, b;
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);
  return "rgba(" + r + "," + g + "," + b + ")";
};

export default RandomColorRgb;
