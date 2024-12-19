export default {
  byPriceASC: (a, b) => a.convertedPrice - b.convertedPrice,
  byPriceDESC: (a, b) => b.convertedPrice - a.convertedPrice,
  byCaptionASC: (a, b) =>
    a.caption.localeCompare(b.caption, undefined, {
      sensitivity: 'accent',
    }),
  byCaptionDESC: (a, b) =>
    b.caption.localeCompare(a.caption, undefined, {
      sensitivity: 'accent',
    }),
}
