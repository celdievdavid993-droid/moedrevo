document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("lead-form");
  const successMessage = document.getElementById("success-message");

  if (form) {
    form.addEventListener("submit", function (event) {
      // Отменяем стандартную перезагрузку страницы
      event.preventDefault();

      // Собираем данные из формы
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      
      // Выводим данные в консоль (для проверки)
      console.log("Отправленные данные:", data);

      // Имитация отправки на сервер (задержка 0.5 сек)
      const submitBtn = form.querySelector("button");
      submitBtn.textContent = "Отправка...";
      submitBtn.disabled = true;

      setTimeout(() => {
        // Скрываем форму и показываем сообщение об успехе
        form.style.display = "none";
        successMessage.style.display = "block";
        
        // Очищаем поля формы (на случай, если пользователь вернется)
        form.reset();
      }, 500);
    });
  }
});