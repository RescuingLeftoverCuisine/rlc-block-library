export function mergeDataForStory(baseData, dataToMerge) {
  return {
    data: {
      renderedInStorybook: true,

      ...baseData.data,
      ...dataToMerge,
    }
  }
}

export function mergeProps(baseData, dataToMerge) {
  return {
    props: {
      data: {
        ...baseData.data,
        ...dataToMerge,
      }
    }
  }
}
