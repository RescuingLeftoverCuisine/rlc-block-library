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

export const copyWithHeadings = {
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
              text: 'Heading 1',
              type: 'text'
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
              text: 'Heading 2',
              type: 'text'
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
              text: 'Heading 3',
              type: 'text'
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
              text: 'Heading 4',
              type: 'text'
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
              text: 'Heading 5',
              type: 'text'
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
              text: 'Heading 6',
              type: 'text'
            }
          ]
        }
      ]
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
              text: 'Heading 1',
              type: 'text'
            }
          ]
        },

        {
          type: 'paragraph',

          content: [
            {
              text: 'Lorem ipsum ',
              type: 'text'
            },

            {
              text: 'dolor sit amet',
              type: 'text',

              marks: [
                {
                  type: 'bold'
                }
              ]
            },

            {
              text: ', ',
              type: 'text'
            },

            {
              text: 'consectetur adipiscing elit',
              type: 'text',

              marks: [
                {
                  type: 'italic'
                }
              ]
            },

            {
              text: ', ',
              type: 'text'
            },

            {
              text: 'sed do eiusmod',
              type: 'text',

              marks: [
                {
                  type: 'link',

                  attrs: {
                    href: 'https://google.com',
                    uuid: null,
                    anchor: null,
                    target: '_self',
                    linktype: 'url'
                  }
                }
              ]
            },

            {
              text: ' tempor incididunt ut labore et dolore magna aliqua.',
              type: 'text'
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
              text: 'Feugiat pharetra varius; finibus pretium lectus suspendisse et. Tortor posuere auctor risus ut elementum risus pulvinar convallis. Nascetur porttitor vestibulum dui hac, penatibus amet curae per donec.',
              type: 'text'
            }
          ]
        },

        {
          type: 'paragraph',

          content: [
            {
              text: 'Bold Text',
              type: 'text',

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
              text: 'Italic Text',
              type: 'text',

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
              text: 'Link',
              type: 'text',

              marks: [
                {
                  type: 'link',
                  attrs: {
                    href: 'https://google.com',
                    uuid: null,
                    anchor: null,
                    target: '_blank',
                    linktype: 'url'
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
                      text: 'List Item 2',
                      type: 'text'
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
                      text: 'List Item 3',
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
