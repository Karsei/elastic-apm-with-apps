# Spring Boot with Elastic APM for test

## 이용 방법

### 환경

ElasticSearch + Kibana + APM 서버 실행
> APM 서버의 경우 Kibana 연동 여부를 확인하므로 조금 늦게 체크해야 한다.
 
```bash
# 실행하기 전에 volume 체크할 것
$ docker compose up -d
```

### 어플리케이션 (java)

https://www.elastic.co/guide/en/apm/agent/java/current/setup-attach-api.html 참고

resource 폴더에 있는 `elasticapm.properties` 에서 상세 설정 진행함