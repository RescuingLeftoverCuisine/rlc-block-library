import '@testing-library/jest-dom'
import { mergeProps } from '@/tests/support/merge.helper.js'
import { render, within } from '@testing-library/svelte'

import Copy from './Copy.svelte'
import { copyBaseData } from './Copy.data.js'

// --------------------------------------------

describe('Copy Block', () => {
  it('renders with required data', () => {
    render(Copy, {
      props: copyBaseData,
    })
  })

  it('renders copy alignment', () => {
    const { container } = render(Copy, mergeProps(copyBaseData, {
      copyAlignment: 'center',
    }))

    const blockElement = container.querySelector('.rlc__block')
    expect(blockElement).toHaveClass('rlc__block__copy--copy-alignment-center')
  })

  it('renders headings', () => {
    const { getByRole } = render(Copy, {
      props: {
        data: {
          copy: {
            content: [
              {
                type: 'heading',

                attrs: {
                  level: 1
                },

                content: [
                  {
                    type: 'text',
                    text: 'Heading 1',
                  }
                ]
              },

              {
                type: 'heading',

                attrs: {
                  level: 2
                },

                content: [
                  {
                    type: 'text',
                    text: 'Heading 2',
                  }
                ]
              },

              {
                type: 'heading',

                attrs: {
                  level: 3
                },

                content: [
                  {
                    type: 'text',
                    text: 'Heading 3',
                  }
                ]
              },

              {
                type: 'heading',

                attrs: {
                  level: 4
                },

                content: [
                  {
                    type: 'text',
                    text: 'Heading 4',
                  }
                ]
              },

              {
                type: 'heading',

                attrs: {
                  level: 5
                },

                content: [
                  {
                    type: 'text',
                    text: 'Heading 5',
                  }
                ]
              },

              {
                type: 'heading',

                attrs: {
                  level: 6
                },

                content: [
                  {
                    type: 'text',
                    text: 'Heading 6',
                  }
                ]
              }
            ]
          }
        }
      }
    })

    const headingOne = getByRole('heading', { name: 'Heading 1' })
    expect(headingOne.tagName).toBe('H1')

    const headingTwo = getByRole('heading', { name: 'Heading 2' })
    expect(headingTwo.tagName).toBe('H2')

    const headingThree = getByRole('heading', { name: 'Heading 3' })
    expect(headingThree.tagName).toBe('H3')

    const headingFour = getByRole('heading', { name: 'Heading 4' })
    expect(headingFour.tagName).toBe('H4')

    const headingFive = getByRole('heading', { name: 'Heading 5' })
    expect(headingFive.tagName).toBe('H5')

    const headingSix = getByRole('heading', { name: 'Heading 6' })
    expect(headingSix.tagName).toBe('H6')
  })

  it('renders basic text in paragraphs', () => {
    const { getByText } = render(Copy, {
      props: {
        data: {
          copy: {
            content: [
              {
                type: 'paragraph',

                content: [
                  {
                    type: 'text',
                    text: 'Lorem ipsum dolor sit amet'
                  },
                ],
              },
            ],
          },
        },
      }
    })

    const basicText = getByText('Lorem ipsum dolor sit amet')
    expect(basicText.tagName).toBe('P')
  })

  it('renders bold text within paragraphs', () => {
    const { getByText } = render(Copy, {
      props: {
        data: {
          copy: {
            content: [
              {
                type: 'paragraph',

                content: [
                  {
                    type: 'text',
                    text: 'Lorem ipsum ',
                  },

                  {
                    type: 'text',
                    text: 'dolor sit amet',

                    marks: [
                      {
                        type: 'bold'
                      }
                    ]
                  },

                  {
                    type: 'text',
                    text: ', tempor incididunt ut labore et dolore magna aliqua.',
                  },
                ],
              },
            ],
          },
        },
      }
    })

    // Ensure first part of paragraph appears.
    expect(getByText(/Lorem ipsum/)).toBeInTheDocument()

    const boldText = getByText('dolor sit amet')
    expect(boldText.tagName).toBe('STRONG')

    // Ensure last part of paragraph appears.
    expect(getByText(/, tempor incididunt/)).toBeInTheDocument()
  })

  it('renders italic text within paragraphs', () => {
    const { getByText } = render(Copy, {
      props: {
        data: {
          copy: {
            content: [
              {
                type: 'paragraph',

                content: [
                  {
                    type: 'text',
                    text: 'Lorem ipsum ',
                  },

                  {
                    type: 'text',
                    text: 'dolor sit amet',

                    marks: [
                      {
                        type: 'italic'
                      }
                    ]
                  },

                  {
                    type: 'text',
                    text: ', tempor incididunt ut labore et dolore magna aliqua.',
                  },
                ],
              },
            ],
          },
        },
      }
    })

    // Ensure first part of paragraph appears.
    expect(getByText(/Lorem ipsum/)).toBeInTheDocument()

    const italicText = getByText('dolor sit amet')
    expect(italicText.tagName).toBe('EM')

    // Ensure last part of paragraph appears.
    expect(getByText(/, tempor incididunt/)).toBeInTheDocument()
  })

  it('renders links within paragraphs with metadata', () => {
    const { getByText } = render(Copy, {
      props: {
        data: {
          copy: {
            content: [
              {
                type: 'paragraph',

                content: [
                  {
                    type: 'text',
                    text: 'Lorem ipsum ',
                  },

                  {
                    type: 'text',
                    text: 'dolor sit amet',

                    marks: [
                      {
                        type: 'link',

                        attrs: {
                          href: 'test.com',
                          target: '_blank',
                        }
                      }
                    ]
                  },

                  {
                    type: 'text',
                    text: ', tempor incididunt ut labore et dolore magna aliqua.',
                  },
                ],
              },
            ],
          },
        },
      }
    })

    // Ensure first part of paragraph appears.
    expect(getByText(/Lorem ipsum/)).toBeInTheDocument()

    const linkElement = getByText('dolor sit amet')
    expect(linkElement.tagName).toBe('A')
    expect(linkElement).toHaveAttribute('href', 'test.com')
    expect(linkElement).toHaveAttribute('target', '_blank')

    // Ensure last part of paragraph appears.
    expect(getByText(/, tempor incididunt/)).toBeInTheDocument()
  })

  it('renders unordered (bulleted) lists', () => {
    const { getByRole } = render(Copy, {
      props: {
        data: {
          copy: {
            content: [
              {
                type: 'bullet_list',

                content: [
                  {
                    type: 'list_item',

                    content: [
                      {
                        type: 'paragraph',

                        content: [
                          {
                            type: 'text',
                            text: 'Item 1',
                          }
                        ]
                      }
                    ],
                  },

                  {
                    type: 'list_item',

                    content: [
                      {
                        type: 'paragraph',

                        content: [
                          {
                            type: 'text',
                            text: 'Item 2',
                          }
                        ]
                      }
                    ],
                  },

                  {
                    type: 'list_item',

                    content: [
                      {
                        type: 'paragraph',

                        content: [
                          {
                            type: 'text',
                            text: 'Item 3',
                          }
                        ]
                      }
                    ],
                  },
                ]
              }
            ]
          }
        }
      }
    })

    const listElement = getByRole('list')
    expect(listElement.children.length).toBe(3)
    expect(listElement.children[0].textContent).toBe(' Item 1 ')
    expect(listElement.children[1].textContent).toBe(' Item 2 ')
    expect(listElement.children[2].textContent).toBe(' Item 3 ')
  })

  it('renders bold text within bulleted lists', () => {
    const { getByRole } = render(Copy, {
      props: {
        data: {
          copy: {
            content: [
              {
                type: 'bullet_list',

                content: [
                  {
                    type: 'list_item',

                    content: [
                      {
                        type: 'paragraph',

                        content: [
                          {
                            type: 'text',
                            text: 'List ',
                          },

                          {
                            type: 'text',
                            text: 'Item',

                            marks: [
                              {
                                type: 'bold'
                              }
                            ]
                          },

                          {
                            type: 'text',
                            text: ' 1',
                          }
                        ]
                      }
                    ]
                  },
                ]
              }
            ]
          }
        }
      }
    })

    const listElement = getByRole('list')
    expect(listElement.children.length).toBe(1)

    const segmentOne = within(listElement.children[0]).getByText(/List/)
    expect(segmentOne.tagName).toBe('LI')

    const segmentTwo = within(listElement.children[0]).getByText(/Item/)
    expect(segmentTwo.tagName).toBe('STRONG')

    const segmentThree = within(listElement.children[0]).getByText(/1/)
    expect(segmentThree.tagName).toBe('LI')
  })

  it('renders italic text within bulleted lists', () => {
    const { getByRole } = render(Copy, {
      props: {
        data: {
          copy: {
            content: [
              {
                type: 'bullet_list',

                content: [
                  {
                    type: 'list_item',

                    content: [
                      {
                        type: 'paragraph',

                        content: [
                          {
                            type: 'text',
                            text: 'List ',
                          },

                          {
                            type: 'text',
                            text: 'Item',

                            marks: [
                              {
                                type: 'italic'
                              }
                            ]
                          },

                          {
                            type: 'text',
                            text: ' 1',
                          }
                        ]
                      }
                    ]
                  },
                ]
              }
            ]
          }
        }
      }
    })

    const listElement = getByRole('list')
    expect(listElement.children.length).toBe(1)

    const segmentOne = within(listElement.children[0]).getByText(/List/)
    expect(segmentOne.tagName).toBe('LI')

    const segmentTwo = within(listElement.children[0]).getByText(/Item/)
    expect(segmentTwo.tagName).toBe('EM')

    const segmentThree = within(listElement.children[0]).getByText(/1/)
    expect(segmentThree.tagName).toBe('LI')
  })

  it('renders links within bulleted lists with metadata', () => {
    const { getByRole } = render(Copy, {
      props: {
        data: {
          copy: {
            content: [
              {
                type: 'bullet_list',

                content: [
                  {
                    type: 'list_item',

                    content: [
                      {
                        type: 'paragraph',

                        content: [
                          {
                            type: 'text',
                            text: 'List ',
                          },

                          {
                            type: 'text',
                            text: 'Item',

                            marks: [
                              {
                                type: 'link',

                                attrs: {
                                  href: 'test.com',
                                  target: '_blank',
                                }
                              }
                            ]
                          },

                          {
                            type: 'text',
                            text: ' 1',
                          }
                        ]
                      }
                    ]
                  },
                ]
              }
            ]
          }
        }
      }
    })

    const listElement = getByRole('list')
    expect(listElement.children.length).toBe(1)

    const segmentOne = within(listElement.children[0]).getByText(/List/)
    expect(segmentOne.tagName).toBe('LI')

    const segmentTwo = within(listElement.children[0]).getByText(/Item/)
    expect(segmentTwo.tagName).toBe('A')
    expect(segmentTwo).toHaveAttribute('href', 'test.com')
    expect(segmentTwo).toHaveAttribute('target', '_blank')

    const segmentThree = within(listElement.children[0]).getByText(/1/)
    expect(segmentThree.tagName).toBe('LI')
  })
})
