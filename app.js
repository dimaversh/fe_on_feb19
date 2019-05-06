/* eslint-disable no-unused-vars */
'use strict';

const stylesString = `
  background-color: #fff;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  border: 1px solid #e8e8e8;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  clear: both;
  cursor: pointer;
  float: left;
  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  height: 42px;
  line-height: 40px;
  outline: 0;
  padding-left: 18px;
  padding-right: 30px;
  position: relative;
  text-align: left !important;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  white-space: nowrap;
  width: auto;
`;

/**
 * Функция принимает строку со стилями
 * и возвращает объект, у которого названия CSS свойств это ключи
 * а значения - строки
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let styleToObject = {};
  let finishedArray = sourceString.trim().split(';');

  for (let i = 0; i < finishedArray.length - 1; i++) {
    finishedArray[i] = finishedArray[i].trim().split(': ');
    styleToObject[finishedArray[i][0]] = finishedArray[i][1];
  }
  return styleToObject;
}


