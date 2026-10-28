#version 300 es
precision highp float;
in vec3 vWorld;
in vec3 vNormal;

uniform vec3 uColor;
uniform float uAlpha;
uniform vec3 uCamPos;

out vec4 FragColor;

void main() {
    vec3 n = normalize(vNormal);
    vec3 v = normalize(uCamPos - vWorld);
    vec3 lightDir0 = normalize(vec3(7.0, 5.0, 12.0) - vWorld);
    vec3 lightDir1 = normalize(vec3(-6.0, -8.0, 3.0) - vWorld);
    vec3 lightDir2 = normalize(vec3(2.0, 8.0, -3.0) - vWorld);

    vec3 ambient = 0.34 * uColor;
    vec3 diff = uColor * (0.85 * max(dot(n, lightDir0), 0.0)
                        + 0.22 * max(dot(n, lightDir1), 0.0)
                        + 0.14 * max(dot(n, lightDir2), 0.0));
    vec3 h = normalize(lightDir0 + v);
    float spec = pow(max(dot(n, h), 0.0), 44.0);
    vec3 color = ambient + diff + spec * vec3(0.35);
    FragColor = vec4(color, uAlpha);
}
