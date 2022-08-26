---
title: springboot烹饪书
cover: 'https://cdn.jsdelivr.net/gh/sineava/picture-bed/cover/bg-04.jpg'
background: url(https://cdn.jsdelivr.net/gh/sineava/picture-bed/cover/bg-04.jpg)
tags: springboot
comments: true
---

## 基础配置
### 开发环境

{% note info flat %}
1. java 1.8+
2. maven 3.5+
{% endnote %}

### maven换源
```xml
<mirror>
  <id>alimaven</id>
  <mirrorOf>central</mirrorOf>  
  <name>aliyun maven</name>
  <url>http://maven.aliyun.com/nexus/content/groups/public/</url>      
</mirror>
```

### 项目运行
{% note info flat %}
推荐spring initializr快速生成springboot项目
{% endnote %}

### 静态资源
{% note info flat %}
只要资源处理resources下的/static, /public, /resources, /META-INF/resources目录下,就可以直接访问
{% endnote %}

## 注解
### @SpringBootApplication
```java
@SpringBootApplication
public class App {
	public static void main(String[] args) {
		SpringApplication.run(App.class, args);
	}
}
```

### @RestController
{% note info flat %}
controller必须处于主程序平级或下级才会注解生效
可以通过修改主程序注解调整@SpringBootApplication(scanBasePackages="com.sineava")
{% endnote %}
```java
@RestController
public class HelloControlller {
  @GetMapping("/hello")
  public String hello() {
      return "hello world";
  }
}
```

### @Configuration
{% note info flat %}
分为full/lite模式(proxyBeanMethods = true/false),为false每次会生成新的bean
{% endnote %}
```java
// bean @Getter@Setter可以替换为@Data注解
@Getter
@Setter
@Accessors(chain = true)
@ToString
public class User {
  private String username;
  private Integer age;

  public User(String username, Integer age) {
    this.username = username;
    this.age = age;
  }
}

// config
@Configuration
public class AppConfig {
  @Bean
  public User user01() {
    return new User("zs", 18);
  }
}

@SpringBootApplication()
public class AppApplication {
  public static void main(String[] args) {
    ConfigurableApplicationContext app = SpringApplication.run(AppApplication.class, args);
    String[] beanNames = app.getBeanDefinitionNames();
    for (String bean: beanNames) {
        System.out.println(bean);
    }

    User user = app.getBean("user01", User.class);
    System.out.println(user);

    AppConfig bean = app.getBean(AppConfig.class);
    User user01 = bean.user01();
    System.out.println(user01);
  }
}

```

### @ImportResource
{% note info flat %}
兼容以前的xml写法
{% endnote %}

```java
// 解析resources路径下的beans.xml,并装配bean
@ImportResource("classpath:beans.xml")
```

### @Autowired
```java
// controller
@RestController
public class HelloControlller {
  @Autowired
  Pet pet;

  @GetMapping("/pet")
  public Pet pet() { return pet; }
}

// bean
@Component
@ConfigurationProperties(prefix="pet")
public class Pet {
  private String name;
}

// application.properties
pet.name=二哈
```

## 问题汇总
### application.properties读取中文乱码
{% note info flat %}
File->Settings->File Encodings 字符修改为UTF-8,并勾选
{% endnote %}

<div style="display:flex;justify-content:flex-start;">
<img src="https://cdn.jsdelivr.net/gh/sineava/picture-bed/doc/springboot/springboot-1.png" />
</div>

---
- [Martin Fowler microservices cn-doc](http://blog.cuicc.com/blog/2015/07/22/microservices/)
- [application.properties config](https://docs.spring.io/spring-boot/docs/current/reference/html/application-properties.html)