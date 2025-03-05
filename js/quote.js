(function () {
  const quoteElement = document.getElementById('quote');
  const quotes = [
    '삶이 있는 한 희망은 있다 - 키케로',
    '산다는 것 그것은 치열한 전투이다 - 로망로랑',
    '하루에 3시간을 걸으면 7년 후에 지구를 한 바퀴 돌 수 있다 - 사무엘존슨',
    '언제나 현재에 집중할 수 있다면 행복할 것이다 - 파울로 코엘료',
    '진정으로 웃으려면 고통을 참아야 하며, 나아가 고통을 즐길 줄 알아야 해 - 찰리 채플린',
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
})();
