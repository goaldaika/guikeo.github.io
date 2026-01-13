
(function() {
  var $animate, $container, $message, $paragraph, MESSAGES, animate, initialise, scramble;
  var today = new Date();
  
    
    MESSAGES = [];

    MESSAGES.push({
      delay: 0,
      text: "Mặc dù anh không hề nói ra, nhưng từ lúc tụi mình quen nhau cho tới tận bây giờ, không có lúc nào là anh không nghĩ tới em. Khi tụi mình chia tay, anh vẫn luôn âm thầm và tìm cách dõi theo em, mong muốn biết thêm về cuộc sống của em  sau khi mối quan hệ của tụi mình chấm dứt. Anh cảm thấy tự hào khi thấy em tốt nghiệp cao đẳng, cảm thấy nhẹ nhõm khi biết được cuối cùng em cũng được yêu."
    });
    MESSAGES.push({
      delay: 7000,
      text: "Và anh cũng nghĩ là em biết, em biết là anh lẵng lặng theo dõi em, có lẽ em nghĩ là anh chỉ theo dõi em 1 thời gian ngắn thôi, nhưng thực chất, anh quan sát sự trưởng thành của em trong im lặng, qua nhưng gì em đưa lên mạng, anh nhìn thấy em đi chơi, đi ăn, có những bộ đồ đẹp, những kiểu tóc mới, và anh hạnh phúc cho em, anh cũng quan sát cả sự trưởng thành và lớn lên của Cún với Phương trong những bức ảnh mà em đăng."
    });
    MESSAGES.push({
      delay: 15000,
      text: "Khi anh biết rằng mình có thể về nước vào lần đầu tiên, anh ngay lập tức muốn gặp em. Khi anh biết rằng mình sẽ về nước và định cư trong nước, anh ngay lập tức tỏ tình lại với em. Trong suốt khoảng thời gian mấy năm ở nước ngoài, khi nhắt tới Việt Nam, anh ngay lập tức nghĩ đến em."
    });
    MESSAGES.push({
      delay: 23000,
      text: "Em có thể không tin, và anh cũng không thể làm gì để chứng minh cho em tin, nhưng tình cảm của anh dành cho em luôn luôn tồn tại, anh luôn muốn nuông chiều và yêu thương em, làm em vui, và giúp em phát triển. Em luôn khen anh, đề cao anh, và luôn cho anh biết rằng anh là một người tài giỏi đến thế nào. Một lần nữa, anh không thể chứng minh được cho em lời nói của anh, nhưng anh hứa với em là anh luôn muốn đem sự tài giỏi đó của anh để phục vụ cho em và làm em được hạnh phúc. "
    });
    MESSAGES.push({
      delay: 32000,
      text: "Và rồi tụi mình gặp nhau, đi chơi với nhau, nắm tay, ôm nhau, hôn nhau, và thân mật với nhau theo rất nhiều cách, sau tất cả những việc đó, làm sao anh có thể làm bạn được với em hả em. Làm sao anh có thể đi với em mà không hôn em, hay không ôm em. Em nói rằng tụi mình vẫn có thể nắm tay nhau và đi chơi với nhau, nhưng em ơi, tâm trí của anh sẽ dày vò anh vì anh biết rằng, ngay cả khi anh nắm tay em và đi chơi với em, em lại đang nghĩ về người khác và muốn được nắm tay người khác, nếu như chỉ là bạn bè thì cũng không có gì đáng nói, nhưng làm sao anh có thể xem em là bạn được nữa hả em."
    });
    MESSAGES.push({
      delay: 40000,
      text: "Em nói rằng em đã cho anh 1 cơ hội thứ 2 vào đầu năm ngoái, nhưng em ơi, lúc đấy anh không có tài sản, tương lai của anh thì chưa rõ ràng, làm sao anh nỡ nhìn người anh yêu bị anh làm tổn thương suốt ngày tháng thêm 1 lần nữa được hả em. Em đã gặp mẹ anh, và cũng là toàn bộ gia đình anh, em đã đến nhà anh, và cũng đã biết được về tài sản mà gia đình anh có, những gì em thấy, thật sự là toàn bộ những gì anh có, chính xác đến từng thứ, không có gì bị giấu đi, đó là tất những gì đã được dùng để nuôi anh lớn và cũng là những thứ sẽ tiếp tục đi cùng anh tới sau này."
    });
    MESSAGES.push({
      delay: 50000,
      text: "Như em đã nói với anh, anh có tinh tế, anh nuông chiều, cưng nựng và yêu thương em hết khả năng của anh, và bản thân anh thực sự thấy vui và hạnh phúc khi em thích sự quan tâm và chăm sóc của anh. Và cũng như em đã nói, anh có sự thực tế nhưng anh thiếu đi kinh tế, dù cho có ham muốn tới mức nào, anh chỉ có thể cho em những gì anh có, nhưng làm sao anh có thể cho em cả những thứ mà hiện tại anh chưa thể có được hả em. "
    });
    MESSAGES.push({
      delay: 62000,
      text: "Đây là nhưng lời cuối cùng mà anh muốn nói với em, anh đã dự định sẽ cho em biết vào lần tới mình đi chơi với nhau, nhưng mỗi ngày trôi qua là mỗi ngày mà anh cảm thấy bị dày vò, vì anh nhớ em, anh muốn âu yếm và ở bên em, anh muốn gặp em và bù đắp cho em tất cả những tổn thương mà anh đã gây ra cho em dù vô tình hay cố ý, nhưng anh không thể, anh không có quyền, và anh cũng không còn cơ hội nào nữa, mỗi lần câu nói 'anh không phải bồ em' dc cất tiếng là mỗi lần trái tim anh bị đâm 1 nhát dao, và giất ngủ của anh cũng bị ảnh hưởng theo mỗi ngày. Anh sẽ chấm dứt toàn bộ mối quan hệ giữa hai tụi mình, anh không thể tiếp tục nói chuyện với em hay gặp em hay tiếp xúc với em theo bất kỳ cách nào, vì nó sẽ chỉ ăn mòn tinh thần của anh mỗi ngày mỗi nghiêm trọng hơn. "
    });
    MESSAGES.push({
      delay: 75000,
      text: "Anh không ghét em hay giận em, hoàn toàn không một tí nào, có lẻ ghét em sẽ làm anh cảm thấy tốt hơn, nhưng làm sao anh có thể ghét người mà anh yêu được hả em. Anh đã hứa em với em là sẽ dạy em tiếng Anh, sẽ đi chùa với em, sẽ uống rựu cùng em, sẽ cưới em vào năm em 28 tuổi, nhưng bây giờ, nếu anh thực hiện những lời hứa ấy thì cũng tức là anh sẽ từ từ giết chết bản thân anh mà thôi. Anh xin lỗi em, anh thực sự xin lỗi, nhưng anh phải thất hứa với em rồi."
    });
    MESSAGES.push({
      delay: 87000,
      text: "Anh sẽ luôn nhớ về em, anh biết rằng anh sẽ không thể quên em, làm sao anh có thể quên được người mà anh yêu hả em. Mãi mãi cho đến sau này, khi em có gia đình và con cái, khi em đột nhiên nghĩ đến anh trong lúc đang bán thuốc hoặc đang nấu ăn cho gia đình của em, và khi em thắc mắc rằng liệu anh có còn nhớ về em, câu trả lời sẽ luôn luôn là có."
    });
    MESSAGES.push({
      delay: 102000,
      text: "Lời của anh kết thúc tại đây, anh mong rằng anh sẽ không bao giờ vô tình gặp lại em, người mà anh yêu."});

    $container = $("#container");

    $message = $("#message");

    $animate = $("#animate");

    $paragraph = null;

    scramble = function(element, text, options) {
      var $element, addGlitch, character, defaults, ghostCharacter, ghostCharacters, ghostLength, ghostText, ghosts, glitchCharacter, glitchCharacters, glitchIndex, glitchLength, glitchProbability, glitchText, glitches, i, j, letter, object, order, output, parameters, ref, settings, shuffle, target, textCharacters, textLength, wrap;
      // Default properties.
      defaults = {
        probability: 0.2,
        glitches: '-|/\\',
        blank: '',
        duration: text.length * 40,
        ease: 'easeInOutQuad',
        delay: 0.0
      };
      // Convert the element to a jQuery object and build the settings object.
      $element = $(element);
      settings = $.extend(defaults, options);
      // Convenience methods.
      shuffle = function() {
        if (Math.random() < 0.5) {
          return 1;
        } else {
          return -1;
        }
      };
      wrap = function(text, classes) {
        return `<span class="${classes}">${text}</span>`;
      };
      // Glitch values.
      glitchText = settings.glitches;
      glitchCharacters = glitchText.split('');
      glitchLength = glitchCharacters.length;
      glitchProbability = settings.probability;
      glitches = (function() {
        var j, len, results;
        results = [];
        for (j = 0, len = glitchCharacters.length; j < len; j++) {
          letter = glitchCharacters[j];
          results.push(wrap(letter, 'glitch'));
        }
        return results;
      })();
      // Ghost values.
      ghostText = $element.text();
      ghostCharacters = ghostText.split('');
      ghostLength = ghostCharacters.length;
      ghosts = (function() {
        var j, len, results;
        results = [];
        for (j = 0, len = ghostCharacters.length; j < len; j++) {
          letter = ghostCharacters[j];
          results.push(wrap(letter, 'ghost'));
        }
        return results;
      })();
      // Text values.
      textCharacters = text.split('');
      textLength = textCharacters.length;
      // Order and output arrays.
      order = (function() {
        var results = [];
        for (var j = 0; 0 <= textLength ? j < textLength : j > textLength; 0 <= textLength ? j++ : j--){ results.push(j); }
        return results;
      }).apply(this);//.sort(this.shuffle);
      output = [];
  // Build the output array.
      for (i = j = 0, ref = textLength; (0 <= ref ? j < ref : j > ref); i = 0 <= ref ? ++j : --j) {
        glitchIndex = Math.floor(Math.random() * (glitchLength - 1));
        glitchCharacter = glitches[glitchIndex];
        ghostCharacter = ghosts[i] || settings.blank;
        addGlitch = Math.random() < glitchProbability;
        character = addGlitch ? glitchCharacter : ghostCharacter;
        output.push(character);
      }
      // Animate the text.
      object = {
        value: 0
      };
      target = {
        value: 1
      };
      parameters = {
        duration: settings.duration,
        ease: settings.ease,
        step: function() {
          var index, k, progress, ref1;
          progress = Math.floor(object.value * (textLength - 1));
          for (i = k = 0, ref1 = progress; (0 <= ref1 ? k <= ref1 : k >= ref1); i = 0 <= ref1 ? ++k : --k) {
            index = order[i];
            output[index] = textCharacters[index];
          }
          return $element.html(output.join(''));
        },
        complete: function() {
          return $element.html(text);
        }
      };
      // Animate the text.
      return $(object).delay(settings.delay).animate(target, parameters);
    };

    animate = function() {
      var data, element, index, j, len, options;
      for (index = j = 0, len = MESSAGES.length; j < len; index = ++j) {
        data = MESSAGES[index];
        element = $paragraph.get(index);
        element.innerText = '';
        options = {
          delay: data.delay
        };
        scramble(element, data.text, options);
      }
    };

    initialise = function() {
      var index, j, len, text;
      $animate.click(animate);
      for (index = j = 0, len = MESSAGES.length; j < len; index = ++j) {
        text = MESSAGES[index];
        $message.append("<p>");
      }
      $paragraph = $container.find("p");
      animate();
    };
    initialise();

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBLFFBQUEsRUFBQSxVQUFBLEVBQUEsUUFBQSxFQUFBLFVBQUEsRUFBQSxRQUFBLEVBQUEsT0FBQSxFQUFBLFVBQUEsRUFBQTs7RUFBQSxRQUFBLEdBQVc7O0VBQ1gsUUFBUSxDQUFDLElBQVQsQ0FBYztJQUFBLEtBQUEsRUFBTSxDQUFOO0lBQVksSUFBQSxFQUFLO0VBQWpCLENBQWQ7O0VBQ0EsUUFBUSxDQUFDLElBQVQsQ0FBYztJQUFBLEtBQUEsRUFBTSxJQUFOO0lBQVksSUFBQSxFQUFLO0VBQWpCLENBQWQ7O0VBQ0EsUUFBUSxDQUFDLElBQVQsQ0FBYztJQUFBLEtBQUEsRUFBTSxJQUFOO0lBQVksSUFBQSxFQUFLO0VBQWpCLENBQWQ7O0VBQ0EsUUFBUSxDQUFDLElBQVQsQ0FBYztJQUFBLEtBQUEsRUFBTSxJQUFOO0lBQVksSUFBQSxFQUFLO0VBQWpCLENBQWQ7O0VBQ0EsUUFBUSxDQUFDLElBQVQsQ0FBYztJQUFBLEtBQUEsRUFBTSxJQUFOO0lBQVksSUFBQSxFQUFLO0VBQWpCLENBQWQ7O0VBRUEsVUFBQSxHQUFhLENBQUEsQ0FBRSxZQUFGOztFQUNiLFFBQUEsR0FBVyxDQUFBLENBQUUsVUFBRjs7RUFDWCxRQUFBLEdBQVcsQ0FBQSxDQUFFLFVBQUY7O0VBQ1gsVUFBQSxHQUFhOztFQUViLFFBQUEsR0FBVyxRQUFBLENBQUMsT0FBRCxFQUFVLElBQVYsRUFBZ0IsT0FBaEIsQ0FBQTtBQUVYLFFBQUEsUUFBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsUUFBQSxFQUFBLGNBQUEsRUFBQSxlQUFBLEVBQUEsV0FBQSxFQUFBLFNBQUEsRUFBQSxNQUFBLEVBQUEsZUFBQSxFQUFBLGdCQUFBLEVBQUEsV0FBQSxFQUFBLFlBQUEsRUFBQSxpQkFBQSxFQUFBLFVBQUEsRUFBQSxRQUFBLEVBQUEsQ0FBQSxFQUFBLENB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XG5NRVNTQUdFUy5wdXNoIGRlbGF5OjAsICAgIHRleHQ6XCJJbmNvbWluZyB0cmFuc21pc3Npb24uLi5cIlxuTUVTU0FHRVMucHVzaCBkZWxheToxMjAwLCB0ZXh0OlwiWW91IGRvbid0IHRhbGsgdG8gYW55Ym9keS5cIlxuTUVTU0FHRVMucHVzaCBkZWxheToyMjAwLCB0ZXh0OlwiWW91IGRvbid0IGludGVyYWN0IHdpdGggYW55Ym9keS5cIlxuTUVTU0FHRVMucHVzaCBkZWxheTozNjAwLCB0ZXh0OlwiWW91ciB3aG9sZSBzZW5zZSBvZiByZWFsaXR5IGlzLCBwcmV0dHkgd2FycGVkLi4uXCJcbk1FU1NBR0VTLnB1c2ggZGVsYXk6NTIwMCwgdGV4dDpcIkRvZXMgaXQgYm90aGVyIHlvdSB0aGF0IHdlJ3JlIG5vdCByZWFsP1wiXG5cbiRjb250YWluZXIgPSAkKFwiI2NvbnRhaW5lclwiKVxuJG1lc3NhZ2UgPSAkKFwiI21lc3NhZ2VcIilcbiRhbmltYXRlID0gJChcIiNhbmltYXRlXCIpXG4kcGFyYWdyYXBoID0gbnVsbFxuXG5zY3JhbWJsZSA9IChlbGVtZW50LCB0ZXh0LCBvcHRpb25zKSAtPlxuXG4gICMgRGVmYXVsdCBwcm9wZXJ0aWVzLlxuICBkZWZhdWx0cyA9XG4gICAgcHJvYmFiaWxpdHk6IDAuMlxuICAgIGdsaXRjaGVzOiAnLXwvXFxcXCdcbiAgICBibGFuazogJydcbiAgICBkdXJhdGlvbjogdGV4dC5sZW5ndGggKiA0MFxuICAgIGVhc2U6ICdlYXNlSW5PdXRRdWFkJ1xuICAgIGRlbGF5OiAwLjBcblxuICAjIENvbnZlcnQgdGhlIGVsZW1lbnQgdG8gYSBqUXVlcnkgb2JqZWN0IGFuZCBidWlsZCB0aGUgc2V0dGluZ3Mgb2JqZWN0LlxuICAkZWxlbWVudCA9ICQoZWxlbWVudClcbiAgc2V0dGluZ3MgPSAkLmV4dGVuZCBkZWZhdWx0cywgb3B0aW9uc1xuXG4gICMgQ29udmVuaWVuY2UgbWV0aG9kcy5cbiAgc2h1ZmZsZSA9ICgpIC0+IGlmIE1hdGgucmFuZG9tKCkgPCAwLjUgdGhlbiAxIGVsc2UgLTFcbiAgd3JhcCA9ICh0ZXh0LCBjbGFzc2VzKSAtPiBcIlwiXCI8c3BhbiBjbGFzcz1cIiN7Y2xhc3Nlc31cIj4je3RleHR9PC9zcGFuPlwiXCJcIlxuXG4gICMgR2xpdGNoIHZhbHVlcy5cbiAgZ2xpdGNoVGV4dCA9IHNldHRpbmdzLmdsaXRjaGVzXG4gIGdsaXRjaENoYXJhY3RlcnMgPSBnbGl0Y2hUZXh0LnNwbGl0ICcnXG4gIGdsaXRjaExlbmd0aCA9IGdsaXRjaENoYXJhY3RlcnMubGVuZ3RoXG4gIGdsaXRjaFByb2JhYmlsaXR5ID0gc2V0dGluZ3MucHJvYmFiaWxpdHlcbiAgZ2xpdGNoZXMgPSAoKHdyYXAgbGV0dGVyLCAnZ2xpdGNoJykgZm9yIGxldHRlciBpbiBnbGl0Y2hDaGFyYWN0ZXJzKVxuXG4gICMgR2hvc3QgdmFsdWVzLlxuICBnaG9zdFRleHQgPSAkZWxlbWVudC50ZXh0KClcbiAgZ2hvc3RDaGFyYWN0ZXJzID0gZ2hvc3RUZXh0LnNwbGl0ICcnXG4gIGdob3N0TGVuZ3RoID0gZ2hvc3RDaGFyYWN0ZXJzLmxlbmd0aFxuICBnaG9zdHMgPSAoKHdyYXAgbGV0dGVyLCAnZ2hvc3QnKSBmb3IgbGV0dGVyIGluIGdob3N0Q2hhcmFjdGVycylcblxuICAjIFRleHQgdmFsdWVzLlxuICB0ZXh0Q2hhcmFjdGVycyA9IHRleHQuc3BsaXQgJydcbiAgdGV4dExlbmd0aCA9IHRleHRDaGFyYWN0ZXJzLmxlbmd0aFxuXG4gICMgT3JkZXIgYW5kIG91dHB1dCBhcnJheXMuXG4gIG9yZGVyID0gWzAuLi50ZXh0TGVuZ3RoXS5zb3J0IEBzaHVmZmxlXG4gIG91dHB1dCA9IFtdXG5cbiAgIyBCdWlsZCB0aGUgb3V0cHV0IGFycmF5LlxuICBmb3IgaSBpbiBbMC4uLnRleHRMZW5ndGhdXG4gICAgZ2xpdGNoSW5kZXggPSBNYXRoLmZsb29yIE1hdGgucmFuZG9tKCkgKiAoZ2xpdGNoTGVuZ3RoIC0gMSlcbiAgICBnbGl0Y2hDaGFyYWN0ZXIgPSBnbGl0Y2hlc1tnbGl0Y2hJbmRleF1cbiAgICBnaG9zdENoYXJhY3RlciA9IGdob3N0c1tpXSBvciBzZXR0aW5ncy5ibGFua1xuICAgIGFkZEdsaXRjaCA9IE1hdGgucmFuZG9tKCkgPCBnbGl0Y2hQcm9iYWJpbGl0eVxuICAgIGNoYXJhY3RlciA9IGlmIGFkZEdsaXRjaCB0aGVuIGdsaXRjaENoYXJhY3RlciBlbHNlIGdob3N0Q2hhcmFjdGVyXG4gICAgb3V0cHV0LnB1c2ggY2hhcmFjdGVyXG5cbiAgIyBBbmltYXRlIHRoZSB0ZXh0LlxuICBvYmplY3QgPSB2YWx1ZTowXG4gIHRhcmdldCA9IHZhbHVlOjFcbiAgcGFyYW1ldGVycyA9XG4gICAgZHVyYXRpb246c2V0dGluZ3MuZHVyYXRpb25cbiAgICBlYXNlOnNldHRpbmdzLmVhc2VcbiAgICBzdGVwOiAtPlxuICAgICAgcHJvZ3Jlc3MgPSBNYXRoLmZsb29yIG9iamVjdC52YWx1ZSAqICh0ZXh0TGVuZ3RoIC0gMSlcbiAgICAgIGZvciBpIGluIFswLi5wcm9ncmVzc11cbiAgICAgICAgaW5kZXggPSBvcmRlcltpXVxuICAgICAgICBvdXRwdXRbaW5kZXhdID0gdGV4dENoYXJhY3RlcnNbaW5kZXhdXG4gICAgICAkZWxlbWVudC5odG1sIG91dHB1dC5qb2luICcnXG4gICAgY29tcGxldGU6IC0+XG4gICAgICAkZWxlbWVudC5odG1sIHRleHRcblxuICAjIEFuaW1hdGUgdGhlIHRleHQuXG4gICQob2JqZWN0KS5kZWxheShzZXR0aW5ncy5kZWxheSkuYW5pbWF0ZSB0YXJnZXQsIHBhcmFtZXRlcnNcblxuXG5cbmFuaW1hdGUgPSAoKSAtPlxuICBmb3IgZGF0YSwgaW5kZXggaW4gTUVTU0FHRVNcbiAgICBlbGVtZW50ID0gJHBhcmFncmFwaC5nZXQgaW5kZXhcbiAgICBlbGVtZW50LmlubmVyVGV4dCA9ICcnXG4gICAgb3B0aW9ucyA9IGRlbGF5OiBkYXRhLmRlbGF5XG4gICAgc2NyYW1ibGUgZWxlbWVudCwgZGF0YS50ZXh0LCBvcHRpb25zXG4gIHJldHVyblxuXG5pbml0aWFsaXNlID0gKCkgLT5cbiAgJGFuaW1hdGUuY2xpY2sgYW5pbWF0ZVxuICAkbWVzc2FnZS5hcHBlbmQgXCI8cD5cIiBmb3IgdGV4dCwgaW5kZXggaW4gTUVTU0FHRVNcbiAgJHBhcmFncmFwaCA9ICRjb250YWluZXIuZmluZCBcInBcIlxuICBhbmltYXRlKClcbiAgcmV0dXJuXG5cbmluaXRpYWxpc2UoKVxuIl19
//# sourceURL=coffeescript