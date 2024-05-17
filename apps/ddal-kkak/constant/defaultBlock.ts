export const blockDefaultValue = {
  SPACER: {
    name: 'SpacerBlock',
    data: {
      blockStyle: {
        height: 1,
        backgroundColor: '#fff',
      },
    },
  },
  TEXT: {
    name: 'TextBlock',
    data: {
      blockData: {
        text: '',
      },
      blockStyle: {
        color: '#000',
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 1.5,
        textAlign: 'left',
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
  },
  IMAGE: {
    name: 'ImageBlock',
    data: {
      blockData: {
        src: '',
        alt: '',
      },
      blockStyle: {
        width: 100,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
  },
  VIDEO: {
    name: 'VideoBlock',
    data: {
      blockData: {
        videoUrl: '',
        textBlockList: [
          {
            blockData: {
              text: '',
            },
            blockStyle: {
              color: '#000',
              fontSize: 16,
              textAlign: 'center',
              lineHeight: 1.6,
            },
          },
        ],
      },
      blockStyle: {
        backgroundColor: '#fff',
        maxHeight: '600px',
        width: '80%',
      },
    },
  },
}
