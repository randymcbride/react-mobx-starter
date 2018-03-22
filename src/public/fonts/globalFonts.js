import {injectGlobal} from 'styled-components';
import NotoMedium from './NotoSansDisplay-Medium.ttf'

injectGlobal`
  @font-face{
    font-family: 'Noto-Medium';
    src: url('${NotoMedium}')
  }
`