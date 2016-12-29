import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Coverflow from '../../src/Coverflow';
import {StyleRoot} from 'radium';

var fn = () => {
  console.log('Album one');
};

ReactDOM.render(

  <Coverflow
    width={980}
    height={480}
    imageWidth={500}
    imageScale={0.8}
    displayQuantityOfSide={2}
    navigation={true}
    enableHeading={false}
    clickable={true}
    >
    <img
      src='images/album-1.png'
      alt='Album one'
      data-action={fn}
      data-title='经历市场考验的协作1'
      data-desc='Coding Enterprise 基于 Coding.net 社区版升级而来。Coding.net 社区版拥有 50,0000 使用者，80,0000 项目，经历市场考验才能为您提供专业的企业协作。'
      />
    <img
      src='images/album-2.png'
      alt='Album two'
      data-action="http://passer.cc"
      data-title='经历市场考验的协作2'
      data-desc='Coding Enterprise 基于 Coding.net 社区版升级而来。Coding.net 社区版拥有 50,0000 使用者，80,0000 项目，经历市场考验才能为您提供专业的企业协作。'
      />
    <img
      src='images/album-3.png'
      alt='Album three'
      data-action="https://doce.cc/"
      data-title='经历市场考验的协作3'
      data-desc='Coding Enterprise 基于 Coding.net 社区版升级而来。Coding.net 社区版拥有 50,0000 使用者，80,0000 项目，经历市场考验才能为您提供专业的企业协作。'
      />
    <img
      src='images/album-4.png'
      alt='Album four'
      data-action="http://tw.yahoo.com"
      data-title='经历市场考验的协作4'
      data-desc='Coding Enterprise 基于 Coding.net 社区版升级而来。Coding.net 社区版拥有 50,0000 使用者，80,0000 项目，经历市场考验才能为您提供专业的企业协作。'
      />
  </Coverflow>,

  document.querySelector('.example_1')
);

ReactDOM.render(
  <StyleRoot>
  <Coverflow
    imageWidth={500}
    imageScale={0.8}
    displayQuantityOfSide={2}
    navigation={true}
    enableHeading={true}
    active={3}
    media={{
      '@media (max-width: 900px)': {
        width: '600px',
        height: '300px'
      },
      '@media (min-width: 900px)': {
        width: '960px',
        height: '600px'
      }
    }}
    >
    <img
      src='images/album-1.png'
      alt='Album one'
      data-action="https://facebook.github.io/react/"
      data-title='经历市场考验的协作'
      data-desc='Coding Enterprise 基于 Coding.net 社区版升级而来。Coding.net 社区版拥有 50,0000 使用者，80,0000 项目，经历市场考验才能为您提供专业的企业协作。'
      />
    <img
      src='images/album-2.png'
      alt='Album two'
      data-action="http://passer.cc"
      data-title='经历市场考验的协作'
      data-desc='Coding Enterprise 基于 Coding.net 社区版升级而来。Coding.net 社区版拥有 50,0000 使用者，80,0000 项目，经历市场考验才能为您提供专业的企业协作。'
      />
    <img
      src='images/album-3.png'
      alt='Album three'
      data-action="https://doce.cc/"
      data-title='经历市场考验的协作'
      data-desc='Coding Enterprise 基于 Coding.net 社区版升级而来。Coding.net 社区版拥有 50,0000 使用者，80,0000 项目，经历市场考验才能为您提供专业的企业协作。'
      />
    <img
      src='images/album-4.png'
      alt='Album four'
      data-action="http://tw.yahoo.com"
      data-title='经历市场考验的协作'
      data-desc='Coding Enterprise 基于 Coding.net 社区版升级而来。Coding.net 社区版拥有 50,0000 使用者，80,0000 项目，经历市场考验才能为您提供专业的企业协作。'
      />
  </Coverflow>
  </StyleRoot>
  ,
  document.querySelector('.example_2')
);

class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0
    };
  }

  render() {
    return (
      <div>
        <div style={{width: '960px', marginLeft: 'auto', marginRight: 'auto'}}>
          <button
            style={{
              borderWidth: '0',
              backgroundColor: '#333',
              color: 'white',
              padding: '10px',
              float: 'right',
              borderTopLeftRadius: '5px',
              borderTopRightRadius: '5px'
            }}
            onClick={this._handleClick.bind(this)}>
            Click to Radom
          </button>
        </div>

        <Coverflow
          width={980}
          height={480}
          imageWidth={500}
          imageScale={0.8}
          displayQuantityOfSide={2}
          navigation={true}
          enableHeading={false}
          active={this.state.active}
          >
          <img
            src='images/album-1.png'
            alt='Album one'
            data-action={fn}
            data-title='经历市场考验的协作'
            data-desc='Coding Enterprise 基于 Coding.net 社区版升级而来。Coding.net 社区版拥有 50,0000 使用者，80,0000 项目，经历市场考验才能为您提供专业的企业协作。'
            />
          <img
            src='images/album-2.png'
            alt='Album two'
            data-action="http://passer.cc"
            data-title='经历市场考验的协作2'
            data-desc='Coding Enterprise 基于 Coding.net 社区版升级而来。Coding.net 社区版拥有 50,0000 使用者，80,0000 项目，经历市场考验才能为您提供专业的企业协作。'
            />
          <img
            src='images/album-3.png'
            alt='Album three'
            data-action="https://doce.cc/"
            data-title='经历市场考验的协作3'
            data-desc='Coding Enterprise 基于 Coding.net 社区版升级而来。Coding.net 社区版拥有 50,0000 使用者，80,0000 项目，经历市场考验才能为您提供专业的企业协作。'
            />
          <img
            src='images/album-4.png'
            alt='Album four'
            data-action="http://tw.yahoo.com"
            data-title='经历市场考验的协作4'
            data-desc='Coding Enterprise 基于 Coding.net 社区版升级而来。Coding.net 社区版拥有 50,0000 使用者，80,0000 项目，经历市场考验才能为您提供专业的企业协作。'
            />
          <img
            src='images/album-5.png'
            alt='Album five'
            data-action="http://www.bbc.co.uk"
            data-title='经历市场考验的协作5'
            data-desc='Coding Enterprise 基于 Coding.net 社区版升级而来。Coding.net 社区版拥有 50,0000 使用者，80,0000 项目，经历市场考验才能为您提供专业的企业协作。'
            />
          <img
            src='images/album-6.png'
            alt='Album six'
            data-action="https://medium.com"
            data-title='经历市场考验的协作'
            data-desc='Coding Enterprise 基于 Coding.net 社区版升级而来。Coding.net 社区版拥有 50,0000 使用者，80,0000 项目，经历市场考验才能为您提供专业的企业协作。'
            />
          <img
            src='images/album-7.png'
            alt='Album seven'
            data-action="http://www.google.com"
            data-title='经历市场考验的协作'
            data-desc='Coding Enterprise 基于 Coding.net 社区版升级而来。Coding.net 社区版拥有 50,0000 使用者，80,0000 项目，经历市场考验才能为您提供专业的企业协作。'
            />
          <img
            src='images/album-1.png'
            alt='Album one'
            data-action="https://facebook.github.io/react/"
            data-title='经历市场考验的协作'
            data-desc='Coding Enterprise 基于 Coding.net 社区版升级而来。Coding.net 社区版拥有 50,0000 使用者，80,0000 项目，经历市场考验才能为您提供专业的企业协作。'
            />
          <img
            src='images/album-2.png'
            alt='Album two'
            data-action="http://passer.cc"
            data-title='经历市场考验的协作'
            data-desc='Coding Enterprise 基于 Coding.net 社区版升级而来。Coding.net 社区版拥有 50,0000 使用者，80,0000 项目，经历市场考验才能为您提供专业的企业协作。'
            />
          <img
            src='images/album-3.png'
            alt='Album three'
            data-action="https://doce.cc/"
            data-title='经历市场考验的协作'
            data-desc='Coding Enterprise 基于 Coding.net 社区版升级而来。Coding.net 社区版拥有 50,0000 使用者，80,0000 项目，经历市场考验才能为您提供专业的企业协作。'
            />
          <img
            src='images/album-4.png'
            alt='Album four'
            data-action="http://tw.yahoo.com"
            data-title='经历市场考验的协作'
            data-desc='Coding Enterprise 基于 Coding.net 社区版升级而来。Coding.net 社区版拥有 50,0000 使用者，80,0000 项目，经历市场考验才能为您提供专业的企业协作。'
            />
        </Coverflow>
      </div>
    );
  }

  _handleClick() {
    console.log('go');
    var num = Math.floor((Math.random() * 10) + 1);
    this.setState({
      active: num
    });
  }
};

ReactDOM.render(
  <Container></Container>,
  document.querySelector('.example_4')
);
