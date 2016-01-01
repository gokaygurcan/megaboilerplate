import React from 'react';
import cx from 'classnames';

const THEME_SVG = (
  <svg version="1.1" width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48" enableBackground="new 0 0 48 48">
<polygon fill="#FFC107" points="22.975,23 6,23 6,6 23,6 "></polygon>
<rect x="6" y="25" fill="#7CB342" width="17" height="17"></rect>
<polygon fill="#2196F3" points="41.975,23 25,23 25,6 42,6 "></polygon>
<rect x="25" y="25" fill="#1565C0" width="17" height="17"></rect>
<path fill="#FFF9C4" d="M17,11c0,1.105,0.895,2,1.998,2C20.105,13,21,12.105,21,11s-0.895-2-2.002-2C17.895,9,17,9.895,17,11"></path>
<polygon fill="#D85700" points="13,12 7,20 19,20 "></polygon>
<polygon fill="#EF7E03" points="18,15 13.875,20 22,20 "></polygon>
<g>
	<path fill="#FFFFFF" d="M12.487,29.518c0-1.105,0.899-1.998,2.013-1.998s2.014,0.893,2.014,1.998c0,1.107-2.014,4.002-2.014,4.002
		S12.487,30.625,12.487,29.518"></path>
	<path fill="#FFFFFF" d="M16.514,37.519c0,1.108-0.9,2.001-2.014,2.001s-2.013-0.893-2.013-2.001c0-1.105,2.013-3.999,2.013-3.999
		S16.514,36.413,16.514,37.519"></path>
	<path fill="#FFFFFF" d="M10.008,33.252c-0.963-0.555-1.293-1.776-0.738-2.734c0.555-0.957,1.787-1.285,2.751-0.729
		c0.963,0.553,2.479,3.731,2.479,3.731S10.971,33.803,10.008,33.252"></path>
	<path fill="#FFFFFF" d="M18.993,33.786c0.963,0.553,1.293,1.777,0.737,2.731c-0.556,0.958-1.787,1.287-2.751,0.734
		C16.016,36.698,14.5,33.52,14.5,33.52S18.029,33.234,18.993,33.786"></path>
	<path fill="#FFFFFF" d="M18.993,33.252c0.963-0.555,1.293-1.776,0.737-2.734c-0.556-0.957-1.787-1.285-2.751-0.729
		C16.016,30.341,14.5,33.52,14.5,33.52S18.029,33.803,18.993,33.252"></path>
	<path fill="#FFFFFF" d="M10.008,33.786c-0.963,0.553-1.293,1.777-0.738,2.731c0.555,0.958,1.787,1.287,2.751,0.734
		c0.963-0.554,2.479-3.732,2.479-3.732S10.971,33.234,10.008,33.786"></path>
</g>
<path fill="#FFC107" d="M16.5,33.597c0,1.103-0.895,1.996-2,1.996s-2-0.894-2-1.996c0-1.109,0.895-2.004,2-2.004
	S16.5,32.487,16.5,33.597"></path>
<g>
	<rect x="29" y="29" fill="#FFC107" width="9" height="9"></rect>

		<rect x="29" y="29.001" transform="matrix(0.7071 0.7072 -0.7072 0.7071 33.504 -13.876)" fill="#FFC107" width="9" height="8.999"></rect>
</g>
<path fill="#FFF8E1" d="M31,33.5c0,1.381,1.121,2.5,2.5,2.5c1.381,0,2.5-1.119,2.5-2.5S34.881,31,33.5,31
	C32.121,31,31,32.119,31,33.5"></path>
<path fill="#FFF59D" d="M27,10c0,1.106,0.895,2,1.999,2C30.105,12,31,11.106,31,10c0-1.105-0.895-2-2.001-2C27.895,8,27,8.895,27,10
	"></path>
<g>
	<circle fill="#E3F2FD" cx="36" cy="15" r="3"></circle>
	<circle fill="#E3F2FD" cx="32" cy="16" r="2.5"></circle>
	<path fill="#E3F2FD" d="M34.4,20c-1.161,0,2.34-4.154,3.5-4.154c1.159,0,2.1,0.93,2.1,2.078C40,19.071,39.06,20,37.9,20
		C36.74,20,35.801,20,34.4,20z"></path>
	<path fill="#E3F2FD" d="M26.965,17.924c0-1.148,0.94-2.078,2.101-2.078c3.499,0,4.66,4.154,3.499,4.154c-1.4,0-2.34,0-3.499,0
		C27.905,20,26.965,19.071,26.965,17.924z"></path>
	<polygon fill="#E3F2FD" points="37.399,20 29,20 29,17.23 37.399,15.846 	"></polygon>
</g>
</svg>

);

const Theme = (props) => {
  return (
    <section className="animated fadeIn">
      <h6>{THEME_SVG} UI Theme</h6>
      <div className="row">
        <div className="col-xs-6 col-md-3">
          <a className={cx('thumbnail', { active: props.theme === 'theme1' })}>
            <img src="http://foundry.mediumra.re/img/chooser/fashion.png" data-theme="theme1" onClick={props.handleThemeClick} />
          </a>
        </div>
        <div className="col-xs-6 col-md-3">
          <a className={cx('thumbnail', { active: props.theme === 'theme2' })}>
            <img src="http://foundry.mediumra.re/img/chooser/classic.png" data-theme="theme2" onClick={props.handleThemeClick} />
          </a>
        </div>
        <div className="col-xs-6 col-md-3">
          <a className={cx('thumbnail', { active: props.theme === 'theme3' })}>
            <img src="http://foundry.mediumra.re/img/chooser/winery.png" data-theme="theme3" onClick={props.handleThemeClick} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Theme;
