# modal-noscroll-helper
用于解决显示弹窗时，锁定页面，防止背景页面一直可以滑动

##############

用法：

1、npm install modal-noscroll-helper --save-dev

2、import ModalNoScrollHelper from 'modal-noscroll-helper'

3、let modalNoScrollHelper = new ModalNoScrollHelper();
   弹窗打开： modalNoScrollHelper.toggleBlock(true)
   弹窗关闭： modalNoScrollHelper.toggleBlock(false)