# 一个管理系统
    包含人员管理 产品项目管理 研发项目管理  任务管理 积分管理

## 使用技术
    1.react redux-sage
    2. antd
    3. roadhog

## spring Data JPA 为此提供了一些表达条件查询的关键字，大致如下：
    1.And --- 等价于 SQL 中的 and 关键字，比如 findByUsernameAndPassword(String user, Striang pwd)；
    2.Or --- 等价于 SQL 中的 or 关键字，比如 findByUsernameOrAddress(String user, String addr)；
    3.Between --- 等价于 SQL 中的 between 关键字，比如 findBySalaryBetween(int max, int min)；
    4.LessThan --- 等价于 SQL 中的 "<"，比如 findBySalaryLessThan(int max)；
    5.GreaterThan --- 等价于 SQL 中的">"，比如 findBySalaryGreaterThan(int min)；
    6.IsNull --- 等价于 SQL 中的 "is null"，比如 findByUsernameIsNull()；
    7.IsNotNull --- 等价于 SQL 中的 "is not null"，比如 findByUsernameIsNotNull()；
    8.NotNull --- 与 IsNotNull 等价；
    9.Like --- 等价于 SQL 中的 "like"，比如 findByUsernameLike(String user)；
    10.NotLike --- 等价于 SQL 中的 "not like"，比如 findByUsernameNotLike(String user)；
    11.OrderBy --- 等价于 SQL 中的 "order by"，比如 findByUsernameOrderBySalaryAsc(String user)；
    12.Not --- 等价于 SQL 中的 "！ ="，比如 findByUsernameNot(String user)；
    13.In --- 等价于 SQL 中的 "in"，比如 findByUsernameIn(Collection<String> userList) ，方法的参数可以是 Collection 类型，也可以是数组或者不定长参数；
    14.NotIn --- 等价于 SQL 中的 "not in"，比如 findByUsernameNotIn(Collection<String> userList) ，方法的参数可以是 Collection 类型，也可以是数组或者不定长参数；