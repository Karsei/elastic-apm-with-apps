# Spring Boot with Elastic APM for test

## 이용 방법

ElasticSearch + Kibana + APM 서버 실행
> APM 서버의 경우 Kibana 연동 여부를 확인하므로 조금 늦게 체크해야 한다.
 
```bash
# 실행하기 전에 volume 체크할 것
$ docker compose up -d
```

resource 폴더에 있는 `elasticapm.properties` 에서 설정