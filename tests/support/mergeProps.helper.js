export function mergeProps(baseData, mergeData) {
  return {
    props: {
      data: {
        ...baseData.data,
        ...mergeData,
      }
    }
  }
}
