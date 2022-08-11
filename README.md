# Spring Boot with Elastic APM for Test

Elastic APM 환경 구성 + Spring Boot 이용

* ElasticSearch, Kibana, APM Server - 7.17.4

## 이용 방법

1. `docker-compose.yml` 에서 수정해야 할 volume 사항이 있다면 변경한다.

2. ElasticSearch + Kibana + APM 서버 실행

```bash
# docker
$ docker compose up -d
# nerdctl
$ nerdctl compose up -d
```

> **Note**
> APM 서버의 경우 Kibana 연동 여부를 확인하므로 조금 늦게 체크해야 한다.

3. http://localhost:5601 로 들어간 후, Observability 의 APM Server 상태 확인

4. 어플리케이션(Java) 에서 Agent 와 함께 호출

https://www.elastic.co/guide/en/apm/agent/java/current/setup-attach-api.html 참고

resource 폴더에 있는 `elasticapm.properties` 에서 상세 설정 진행함