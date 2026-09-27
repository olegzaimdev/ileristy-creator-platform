package com.ileristy.platform.config;

import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration(proxyBeanMethods = false)
@EnableConfigurationProperties(CorsProperties.class)
public class WebConfiguration implements WebMvcConfigurer {

    private final CorsProperties corsProperties;

    public WebConfiguration(CorsProperties corsProperties) {
        this.corsProperties = corsProperties;
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins(
                        corsProperties.allowedOrigins()
                                .toArray(String[]::new)
                )
                .allowedMethods("GET", "POST", "OPTIONS")
                .allowedHeaders(HttpHeaders.CONTENT_TYPE)
                .exposedHeaders(HttpHeaders.LOCATION)
                .allowCredentials(false)
                .maxAge(3600);
    }
}