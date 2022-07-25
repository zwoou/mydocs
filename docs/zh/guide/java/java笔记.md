# java笔记

## JavaBean 的boolean 类型的设置

根据JavaBean 规范 8.3介绍  boolean类型 用 is属性 代替get属性
[https://download.oracle.com/otndocs/jcp/7224-javabeans-1.01-fr-spec-oth-JSpec/](https://download.oracle.com/otndocs/jcp/7224-javabeans-1.01-fr-spec-oth-JSpec/)

## javaagent

java探针 JavaAgent 是JDK 1.5 以后引入的，也叫做Java代理

javaagent的作用

- 可以在加载java文件之前进行拦截，修改字节码。
- 可以在运行期间修改已经加载的类的字节码。
  - 这种用法有很多的限制。
- javaagent结合javassist功能更强大：可以创建类、方法、变量等。

这实际上提供了一种虚拟机级别的 AOP 实现方式。通过以上方法就能实现对一些框架或是技术的采集点进行字节码修改，完成这些功能：对应用进行监控，对执行指定方法或是接口时额外添加操作（打印日志、打印方法执行时间、采集方法的入参和结果等）。

很多APM监控系统就是基于此实现的，例如：Arthas、SkyWalking。

javaagent的使用方式

方式1：在一个普通 Java 程序（带有 main 函数的 Java 类）运行时，通过 -javaagent 参数指定一个特定的 jar 文件（包含 Instrumentation 代理）来启动 Instrumentation 的代理程序。
 -javaagent 这个参数的个数是不限的，如果指定了多个，则会按指定的先后执行，执行完各个 agent 后，才会执行主程序的 main 方法。例如：
java -javaagent:D:\workspace\javaagent.jar=hello1 -javaagent:D:\workspace\javaagent.jar=hello2 -jar D:\workspace\myTest.jar
方式2：在一个普通 Java 程序（带有 main 函数的 Java 类）运行时，通过 Java Tool API 中的 attach 方式指定进程id和特定jar包地址，启动 Instrumentation 的代理程序。
javaagent其他的功能

获取所有已经被加载过的类
获取所有已经被初始化过了的类（执行过了clinit方法，是上面的一个子集）
获取某个对象的大小
将某个jar加入到bootstrapclasspath里作为高优先级被bootstrapClassloader加载
将某个jar加入到classpath里供AppClassload去加载
设置某些native方法的前缀，主要在查找native方法的时候做规则匹配
静态agent与动态agent
        Agent分为如下两种：

静态Instrument：在main加载之前运行的Agent
动态Instrument：在main运行之后运行的Agent（JDK1.6以后提供）。
静态Instrument（启动时）加载Instrument过程

创建并初始化 JPLISAgent；
监听VMInit事件，在JVM初始化完成之后做下面的事情：
创建InstrumentationImpl对象；
监听ClassFileLoadHook事件；
调用InstrumentationImpl的loadClassAndCallPremain方法，在这个方法里会去调用javaagent中MANIFEST.MF里指定的Premain-Class类的premain方法 ；
解析javaagent中MANIFEST.MF文件的参数，并根据这些参数来设置JPLISAgent里的一些内容。
动态Instrument运行时加载Instrument过程

通过JVM的attach机制来请求目标JVM加载对应的agent，过程大致如下：

创建并初始化JPLISAgent；
解析 javaagent 里 MANIFEST.MF 里的参数；
创建 InstrumentationImpl 对象；
监听 ClassFileLoadHook 事件；
调用 InstrumentationImpl 的loadClassAndCallAgentmain方法，在这个方法里会去调用javaagent里 MANIFEST.MF 里指定的Agent-Class类的agentmain方法。

Premain-Class ：包含 premain 方法的类（类的全路径名）
Agent-Class ：包含 agentmain 方法的类（类的全路径名）
Boot-Class-Path ：设置引导类加载器搜索的路径列表。查找类的特定于平台的机制失败后，引导类加载器会搜索这些路径。按列出的顺序搜索路径。列表中的路径由一个或多个空格分开。路径使用分层 URI 的路径组件语法。如果该路径以斜杠字符（“/”）开头，则为绝对路径，否则为相对路径。相对路径根据代理 JAR 文件的绝对路径解析。忽略格式不正确的路径和不存在的路径。如果代理是在 VM 启动之后某一时刻启动的，则忽略不表示 JAR 文件的路径。（可选）
Can-Redefine-Classes ：true表示能重定义此代理所需的类，默认值为 false（可选）
Can-Retransform-Classes ：true 表示能重转换此代理所需的类，默认值为 false （可选）
Can-Set-Native-Method-Prefix： true表示能设置此代理所需的本机方法前缀，默认值为 false（可选）