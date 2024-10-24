export const copyBaseData = {
  data: {
    copy: {
      content: [
        {
          type: 'paragraph',
        },
      ],
    },
  },
}

export function copyWithUnorderedList(listItems) {
  const listData = {
    type: 'bullet_list',
    content: [],
  }

  listItems.forEach(item => {
    listData.content.push({
      type: 'list_item',

      content: [
        {
          type: 'paragraph',

          content: [
            {
              type: 'text',
              text: item,
            }
          ]
        }
      ]
    })
  })

  return {
    data: {
      copy: {
        content: [
          listData
        ]
      }
    }
  }
}

export const copyWithAllSupportedElements = {
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
              text: ', ',
            },

            {
              type: 'text',
              text: 'consectetur adipiscing elit',

              marks: [
                {
                  type: 'italic'
                }
              ]
            },

            {
              type: 'text',
              text: ', ',
            },

            {
              type: 'text',
              text: 'sed do eiusmod',

              marks: [
                {
                  type: 'link',

                  attrs: {
                    href: 'https://google.com',
                    target: '_self',
                  }
                }
              ]
            },

            {
              type: 'text',
              text: ' tempor incididunt ut labore et dolore magna aliqua.',
            }
          ]
        },

        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            }
          ]
        },

        {
          type: 'paragraph',

          content: [
            {
              type: 'text',
              text: 'Feugiat pharetra varius; finibus pretium lectus suspendisse et. Tortor posuere auctor risus ut elementum risus pulvinar convallis. Nascetur porttitor vestibulum dui hac, penatibus amet curae per donec.',
            }
          ]
        },

        {
          type: 'paragraph',

          content: [
            {
              type: 'text',
              text: 'Bold Text',

              marks: [
                {
                  type: 'bold'
                }
              ]
            }
          ]
        },

        {
          type: 'paragraph',

          content: [
            {
              type: 'text',
              text: 'Italic Text',

              marks: [
                {
                  type: 'italic'
                }
              ]
            }
          ]
        },

        {
          type: 'paragraph',

          content: [
            {
              type: 'text',
              text: 'Link',

              marks: [
                {
                  type: 'link',

                  attrs: {
                    href: 'https://google.com',
                    target: '_blank',
                  }
                }
              ]
            }
          ]
        },

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
                      text: 'List Item 1',
                    }
                  ]
                }
              ]
            },

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
                      text: ' 2',
                    }
                  ]
                }
              ]
            },

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
                      text: ' 3',
                    }
                  ]
                }
              ]
            },

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
                            href: 'https://google.com',
                            target: '_blank',
                          }
                        }
                      ]
                    },

                    {
                      text: ' 4',
                      type: 'text'
                    }
                  ]
                }
              ]
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
          type: 'paragraph',

          content: [
            {
              type: 'text',
              text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
          type: 'paragraph',

          content: [
            {
              type: 'text',
              text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
          type: 'paragraph',

          content: [
            {
              type: 'text',
              text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
          type: 'paragraph',

          content: [
            {
              type: 'text',
              text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
        },

        {
          type: 'paragraph',

          content: [
            {
              type: 'text',
              text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            }
          ]
        }
      ]
    }
  }
}
