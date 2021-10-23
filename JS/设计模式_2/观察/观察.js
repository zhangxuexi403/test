/* 观察者模式 */
// 又称为发布-订阅模式：有人发布。有人订阅。一旦有人发布，订阅者就可以收到消息。主动权在发布者手中
// 举例：订阅报纸：报社有新版报纸发行，会给你一份
/* 使用效果 */
// 订阅：lk.addTypeTargetAction('h5',stu1,stu1.noup);lk.addTypeTargetAction('h5',stu2,stu2.noup);lk.addTypeTargetAction('iOS',stu2,stu2.baoming);
// 发布：lk.publishMsg('h5','h5开班了','学费99')
/* 描述 */
// 一个用户可以订阅很多个类型的消息，做不同的操作
