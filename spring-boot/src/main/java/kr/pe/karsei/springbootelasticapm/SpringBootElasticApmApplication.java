package kr.pe.karsei.springbootelasticapm;

import co.elastic.apm.attach.ElasticApmAttacher;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringBootElasticApmApplication {
    public static void main(String[] args) {
        ElasticApmAttacher.attach();
        SpringApplication.run(SpringBootElasticApmApplication.class, args);
    }
}
